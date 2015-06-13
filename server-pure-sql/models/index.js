var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages (SELECT)
    get: function (callback) {
      // using a left outer join since the user of a message may not yet exist
      var queryString = 'select messages.id, messages.text, messages.roomname, users.username \
                         from messages left outer join users on (messages.userid = users.id) \
                         order by messages.id desc';  
      db.query(queryString, function(err, results){
        callback(err, results);
      });                         
    }, 
    // insert a message into the messages table (INSERT)
    post: function (params, callback) {
      var queryString = 'insert into messages(text, userid, roomname) \
                         value (?, select id from users where username = ? limit 1), ?)';
      db.query(queryString, params, function(err, results){
        callback(err, results);
      });
    } 
  },

  users: {
    // a function which produces all the users (SELECT)
    get: function (callback) {
      // all users. each unique user is a unique row
      var queryString = 'select * from users';
      db.query(queryString, function(err, results){
        callback(err, results);
      })
    },
    // add  a new user into the users table (INSERT)
    post: function (params, callback) {
      var queryString = 'insert into users(username) values (?)';
      db.query(queryString, params, function(err, results){
        callback(err, results);
      });
    }
  }
};

