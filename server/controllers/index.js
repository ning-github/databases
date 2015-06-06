var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    // the function that is passed as the callback to app.get or app.post
    get: function (req, res) {
      console.log("get request message");
      // should send a response to the Messages collection
      // -- this response should be what models module got from db
      res.send(JSON.stringify({results: [{username: "blink", text: "test", roomname:"asdf"}, {username: "blink", text: "test", roomname:"asdf"}, {username: "blink", text: "test", roomname:"asdf"}]}));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("post request message");
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {}
  }
};
