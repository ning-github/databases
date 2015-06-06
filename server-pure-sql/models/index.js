var db = require('../db');


module.exports = {
  messages: {
    get: function (responseFromDB) {
      db.query('SELECT * FROM messages;', function(err, data, fields){
        console.log(data);
        console.log("---------------------------------------");
        responseFromDB.send(JSON.stringify({results: data}));
      });
    }, // a function which produces all the messages
    post: function (dataFromController) {
      console.log("from the model: ", dataFromController);
      var queryString = "INSERT INTO messages (username, message, roomname) VALUES ('spiderman', '" + dataFromController.message +"', '"+ dataFromController.roomname +"');";
      db.query(queryString,
        function (err, success, fields){
          console.log("error: ", err);
          console.log(success);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

