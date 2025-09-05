@echo off
echo Starting Assignment Application...
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Start backend server
echo Starting backend server...
cd project\backend
start "Backend Server" cmd /k "npm install && npm run start:dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend server
echo Starting frontend server...
cd ..\frontend
start "Frontend Server" cmd /k "npm install && npm run dev"

echo.
echo Backend running on: http://localhost:3001
echo Frontend running on: http://localhost:5173
echo.
echo Both servers are starting in separate windows.
echo Close those windows to stop the servers.
echo.
pause
