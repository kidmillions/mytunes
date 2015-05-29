// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'div',


  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.html('');
    this.collection.forEach(this.renderSong, this);
    this.$el.find('div').first().hide();
  },

  renderSong: function(song){
    var songView = new SongQueueEntryView({model: song});
    this.$el.append(songView.render());
  }

});
