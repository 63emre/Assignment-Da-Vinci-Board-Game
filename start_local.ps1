# Assignment Application Startup Script
Write-Host "Starting Assignment Application..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Cyan
} catch {
    Write-Host "Error: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Function to start backend
function Start-Backend {
    Write-Host "Starting backend server..." -ForegroundColor Yellow
    Set-Location "project\backend"
    
    # Install dependencies if needed
    if (!(Test-Path "node_modules")) {
        Write-Host "Installing backend dependencies..." -ForegroundColor Cyan
        npm install
    }
    
    # Start backend in new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run start:dev"
    Set-Location "..\.."
}

# Function to start frontend
function Start-Frontend {
    Write-Host "Starting frontend server..." -ForegroundColor Yellow
    Set-Location "project\frontend"
    
    # Install dependencies if needed
    if (!(Test-Path "node_modules")) {
        Write-Host "Installing frontend dependencies..." -ForegroundColor Cyan
        npm install
    }
    
    # Start frontend in new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev -- --force"
    Set-Location "..\.."
}

# Start both servers
Start-Backend
Start-Sleep -Seconds 3
Start-Frontend

Write-Host ""
Write-Host "✅ Both servers are starting in separate PowerShell windows:" -ForegroundColor Green
Write-Host "   🔧 Backend: http://localhost:3001" -ForegroundColor Cyan
Write-Host "   🌐 Frontend: http://localhost:5173" -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 Note: Close the PowerShell windows to stop the servers" -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to close this window"
