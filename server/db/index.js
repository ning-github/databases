var Sequelize = require('sequelize');
var orm = new Sequelize('chat', 'root', '');

// define tables (which are models)
var Message = orm.define('Message', {
  roomname: Sequelize.STRING,
  text: Sequelize.STRING
});

var User = orm.define('User', {
  username: Sequelize.STRING
});

// define relational structure 
User.hasMany(Message);    // one to many (one user has many messages)
Message.belongsTo(User);  // one to one (one message has one user)

// sync these models (if not created, create them already)
User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;