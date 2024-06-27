const socketio = require('socket.io');
let io;

function initializeSocket(server) {
  io = socketio(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  // Handle incoming connections
  io.on('connection', function(socket) {
    console.log('New client connected:', socket.id);

    // Handle incoming messages
    socket.on('message', function(data) {
      console.log(`Received message from ${socket.id}:`, data);

      // Broadcast message to all clients
      io.emit('message', data); // Sends to all connected clients
    });

    // Handle client disconnection
    socket.on('disconnect', function() {
      console.log('Client disconnected:', socket.id);
    });
  });
}

function getSocketInstance() {
    return io;
}

module.exports = {
  initializeSocket,
  getSocketInstance
};
