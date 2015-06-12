var Message = Backbone.Model.extend({
  url: 'http://127.0.0.1:3000/messages',
  defaults: {
    username: 'Guest'
  }
});

var Messages = Backbone.Collection.extend({
  model: Message,
  url: 'http://127.0.0.1:3000/messages',

  loadMessages: function () {
    // update collection
    this.fetch({success: function(model, response, options){
      console.log(response);  // log the response from server
    }});
  },

  parse: function (response, options) {
    var output = [];
    for (var i = 0; i < response.results.length; i++) {
      output.push(response.results[i]);
    }
    return output;
  }
});

var MessageView = Backbone.View.extend({
  model: Message,

  template: _.template(['<li class="well">',
        '<div class="username"><%-username%></div>',
        '<div class="msgText"><%-message%></div>',
        '<div><%-roomname%></div>',
      '</li>',].join('')),

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});

var MessagesView = Backbone.View.extend({
  initialize: function () {
    this.collection.on('sync', this.render, this);
    this.onScreenMessages = {};
  },

  render: function () {
    // clears the feed (we can do this without flashing because
    //    the .on('sync') is asynchronous  
    // render
    this.collection.forEach(this.renderMessage, this);
  },

  renderMessage: function(item){
      var newMessageView = new MessageView({model:item});
      this.$el.prepend(newMessageView.render());
  }
});

var SubmitView = Backbone.View.extend({

  events: {
    'click .submit': 'doSubmit'
  },

  doSubmit: function(e){
    e.preventDefault();
    var $username = this.$('#username');
    var $text = this.$('#message');
    var $roomname = this.$('#roomname');
    var data = {
      username: $username.val(),
      message: $text.val(),
      roomname: $roomname.val()
    };
    this.collection.create(data);
    $username.val('');
    $text.val('');
    $roomname.val('');
    this.collection.loadMessages();
  },

});
