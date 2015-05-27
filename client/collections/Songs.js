// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,
  initialize: function() {
    // this.model.on('enqueue', function(){console.log("asdf");});
    // this.listenTo(model,'enqueue', this.addToQueue, this);
  },

  addToQueue: function() {
    console.log("I'm adding to the queue!!!!");
  }

});
