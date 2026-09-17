$ErrorActionPreference = 'Stop'

Write-Host "Building Next.js app..."
npm run build

Write-Host "Creating deployment folder structure..."
$deployDir = "cpanel-deploy"
If (Test-Path $deployDir) {
    Remove-Item -Path $deployDir -Recurse -Force
}
New-Item -ItemType Directory -Path $deployDir | Out-Null

Write-Host "Copying standalone build..."
Copy-Item -Path ".next\standalone\*" -Destination $deployDir -Recurse -Force

Write-Host "Copying static assets..."
$nextStaticDir = "$deployDir\.next"
If (-not (Test-Path $nextStaticDir)) {
    New-Item -ItemType Directory -Path $nextStaticDir | Out-Null
}
Copy-Item -Path ".next\static" -Destination "$nextStaticDir\static" -Recurse -Force
Copy-Item -Path "public" -Destination "$deployDir\public" -Recurse -Force

Write-Host "Copying environment and prisma files..."
If (Test-Path ".env") {
    Copy-Item -Path ".env" -Destination $deployDir -Force
}
If (Test-Path ".env.production") {
    Copy-Item -Path ".env.production" -Destination $deployDir -Force
}
If (Test-Path "prisma") {
    Copy-Item -Path "prisma" -Destination $deployDir -Recurse -Force
}

Write-Host "Zipping for cPanel..."
$zipFile = "cpanel-ready-build.zip"
If (Test-Path $zipFile) {
    Remove-Item -Path $zipFile -Force
}
Compress-Archive -Path "$deployDir\*" -DestinationPath $zipFile -Force

Write-Host "Cleaning up..."
Remove-Item -Path $deployDir -Recurse -Force

Write-Host "Done! The file cpanel-ready-build.zip is ready."
