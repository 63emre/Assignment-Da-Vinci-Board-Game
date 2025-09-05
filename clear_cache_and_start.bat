@echo off
echo Clearing cache and restarting Assignment Application...
echo.

REM Clear npm cache
echo Clearing npm cache...
npm cache clean --force

REM Navigate to frontend and clear cache
cd project\frontend
echo Clearing Vite cache...
if exist "node_modules\.vite" rmdir /s /q "node_modules\.vite"
if exist ".vite" rmdir /s /q ".vite"

REM Go back to root
cd ..\..

echo Cache cleared! Starting servers...
echo.

REM Start the application
call start_local.bat
