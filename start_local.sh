#!/bin/bash

# Start the backend server
echo "Starting backend server..."
cd project/backend
npm install
npm run start:dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start the frontend server
echo "Starting frontend server..."
cd ../frontend
npm install
npm run dev &
FRONTEND_PID=$!

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo ""
echo "Backend running on: http://localhost:3000"
echo "Frontend running on: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Function to handle cleanup
cleanup() {
    echo "Shutting down servers..."
    kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
    exit
}

# Set trap to cleanup on script exit
trap cleanup SIGINT SIGTERM

# Wait for background processes
wait
