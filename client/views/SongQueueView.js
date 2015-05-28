// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.html('<div></div>');
    this.collection.forEach(this.renderSong, this);
  },

  renderSong: function(song){
    var songView = new SongQueueEntryView({model: song});
    this.$el.append(songView.render());
  }

});
