var db = require('../db');
var bluebird = require('bluebird');

module.exports = {
  messages: {
<<<<<<< HEAD
    // the function that is passed as the callback to app.get or app.post
    get: function (req, res) {
      console.log("get request message");
      // should send a response to the Messages collection
      // -- this response should be what models module got from db
      //res.send(JSON.stringify({results: [{username: "blink", text: "test", roomname:"asdf"}, {username: "blink", text: "test", roomname:"asdf"}, {username: "blink", text: "test", roomname:"asdf"}]}));
      models.messages.get(res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("post request message");
      console.log("from the controller: ", req.body);
      models.messages.post(req.body);
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {}
=======
    get: function (req, res) {
      // include operates like a left outer join
      db.Message.findAll({include: [db.User]})
        .complete(function(err, results){
          res.json(results);
        })
    }, 
    post: function (req, res) {
      // find or create the message's user (that info is needed for making a message)
      db.User.findOrCreate(where: {username: req.body.username});
        .complete(function(err,results){
          // use the found or created username (results) to create a message
          db.Message.create({ 
            userid: results[0].dataValues.id,
            text: req.body.message,
            roomname: req.body.roomname
          }).complete(function(err, results){
            // we don't res.json/res.send here cause the point of the post is completing creation
            res.sendStatus(201);  
          })
        });
    } 
  },

  users: {
    get: function (req, res) {
      db.findAll().complete(function(err, results){
        res.json(results);
      });
    },
    post: function (req, res) {
      db.create({username: req.body.username})
        .complete(function(err, results){
          res.sendStatus(201);
        });
    }
>>>>>>> orm
  }
};
