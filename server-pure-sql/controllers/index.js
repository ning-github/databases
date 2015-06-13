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
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

