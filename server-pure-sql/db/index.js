var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

module.exports = connection;

/*

schema --> db connection -->  |  server (app.js)  |  --> client                    
                          --> model --> controller --> 
*/

