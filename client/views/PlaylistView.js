var PlaylistView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click .addToQueue': 'addToQueue',
    // 'click .savePlaylist': 'savePlaylist'
  },

  initialize: function(){
    this.collection.on('add remove', this.render, this);
  },

  render: function(){
    this.$el.html('<div class="btn addToQueue">Play Now</div><div class="btn savePlaylist">Save</div>');
    this.collection.forEach(this.renderPlaylistView, this);
  },

  renderPlaylistView: function(song) {
    var playlistEntryView = new PlaylistEntryView({model: song});
    this.$el.append(playlistEntryView.render());
  },

  addToQueue: function() {
    this.collection.forEach(function(song) {
      song.enqueue();
    }, this);
  },

  savePlaylist: function() {
    this.collection.savePlaylist();
  }

});
