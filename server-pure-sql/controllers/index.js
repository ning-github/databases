var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        // res.json is identical to res.send
        //   except that it converts its argument to JSON
        res.json(results);
      });
    }, 
    post: function (req, res) {
      // create a params array to pass on to the model
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(err, result){
        res.sendStatus(201);  // 201 is 'Created' status code
      });   
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results){
        res.json(results);
      })
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results){
        res.sendStatus(201);
      });
    }
  }
};

// module.exports = {
//   messages: {
//     // the function that is passed as the callback to app.get or app.post
//     get: function (req, res) {
//       console.log("get request message");
//       // should send a response to the Messages collection
//       // -- this response should be what models module got from db
//       models.messages.get(res);
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       console.log("post request message");
//       console.log("from the controller: ", req.body);
//       models.messages.post(req.body);
//     } // a function which handles posting a message to the database

//   },

//   users: {
//     // Ditto as above
//     get: function (req, res) {
//     },
//     post: function (req, res) {}
//   }
// };

