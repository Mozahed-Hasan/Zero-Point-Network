// ============================================================
// STEP 1: Set up logging using ONLY built-in modules
// (must come before any third-party requires)
// ============================================================
const path = require('path')
const fs = require('fs')
const { createServer } = require('http')
const { parse } = require('url')

const LOG_FILE = path.join(__dirname, 'app-error.log')

function log(msg) {
  const line = '[' + new Date().toISOString() + '] ' + msg + '\n'
  try { fs.appendFileSync(LOG_FILE, line) } catch (e) {}
  console.error(line)
}

// Write a startup marker immediately — if this file appears in
// File Manager, Passenger IS running our code
try {
  fs.writeFileSync(path.join(__dirname, 'STARTED.txt'),
    'Server started at ' + new Date().toISOString() + '\n')
} catch (e) {}

process.on('uncaughtException', function (err) {
  log('UNCAUGHT EXCEPTION: ' + err.stack)
  process.exit(1)
})
process.on('unhandledRejection', function (reason) {
  log('UNHANDLED REJECTION: ' + (reason && reason.stack ? reason.stack : String(reason)))
  process.exit(1)
})

log('Built-in modules loaded OK. About to require next...')

// ============================================================
// STEP 2: Load Next.js (third-party — may fail on Linux)
// ============================================================
var next
try {
  next = require('next')
  log('require("next") succeeded')
} catch (err) {
  log('FATAL: require("next") failed: ' + err.stack)
  process.exit(1)
}

// ============================================================
// STEP 3: Start the server
// ============================================================
process.env.NODE_ENV = 'production'

const dir = __dirname
const port = parseInt(process.env.PORT, 10) || 3000
const hostname = '0.0.0.0'

log('Starting Next.js app — port: ' + port + ', dir: ' + dir)

const app = next({ dev: false, hostname, port, dir })
const handle = app.getRequestHandler()

app.prepare().then(function () {
  log('Next.js prepared — starting HTTP server...')
  createServer(function (req, res) {
    try {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    } catch (err) {
      log('Request error: ' + err.message)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
    .once('error', function (err) {
      log('HTTP server error: ' + err.message)
      process.exit(1)
    })
    .listen(port, hostname, function () {
      log('SUCCESS — server ready on ' + hostname + ':' + port)
    })
}).catch(function (err) {
  log('FATAL: app.prepare() failed: ' + err.stack)
  process.exit(1)
})
