const { connect, connection } = require('mongoose');

// Adds  Atlas connection 
/* Using Atlas connection Node will look for this environment variable and if it exists, it will use it.
Otherwise, it will assume that you are running this application locally*/
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkDB';
  
// Connect to MongoDB
connect(connectionString);

module.exports = connection;