@echo off
echo Restarting backend server to reload data...
echo.

REM Kill any existing backend processes on port 3001
for /f "tokens=5" %%a in ('netstat -aon ^| find ":3001" ^| find "LISTENING"') do (
    echo Stopping process %%a
    taskkill /f /pid %%a >nul 2>&1
)

REM Start backend server
echo Starting backend server...
cd project\backend
start "Backend Server" cmd /k "npm run start:dev"

echo.
echo Backend server restarted on: http://localhost:3001
echo.
pause
