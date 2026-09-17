Write-Host "Building Next.js application..."
npm run build

Write-Host "Preparing standalone directory..."
$standalonePath = ".\.next\standalone"
$publicPath = ".\public"
$staticPath = ".\.next\static"

# Create necessary directories
if (!(Test-Path "$standalonePath\public")) {
    New-Item -ItemType Directory -Force -Path "$standalonePath\public"
}
if (!(Test-Path "$standalonePath\.next\static")) {
    New-Item -ItemType Directory -Force -Path "$standalonePath\.next\static"
}

# Copy files
if (Test-Path $publicPath) {
    Copy-Item -Path "$publicPath\*" -Destination "$standalonePath\public" -Recurse -Force
}
if (Test-Path $staticPath) {
    Copy-Item -Path "$staticPath\*" -Destination "$standalonePath\.next\static" -Recurse -Force
}

# Copy Prisma and .env for SQLite support
if (Test-Path ".\prisma") {
    Copy-Item -Path ".\prisma" -Destination "$standalonePath\prisma" -Recurse -Force
}
if (Test-Path ".\.env") {
    Copy-Item -Path ".\.env" -Destination "$standalonePath\.env" -Force
}

Write-Host "Zipping the deployment package..."
$zipPath = ".\cpanel-deploy.zip"
if (Test-Path $zipPath) {
    Remove-Item $zipPath
}
Compress-Archive -Path "$standalonePath\*" -DestinationPath $zipPath

Write-Host "Deployment package ready: cpanel-deploy.zip"
