var PlaylistView = Backbone.View.extend({
  el: '<div></div>',

  events: {
    'click .addToQueue': 'addToQueue',
    // 'click .savePlaylist': 'savePlaylist'
  },

  initialize: function(){
    this.collection.on('add remove', this.render, this);
  },

  render: function(){
    this.$el.html('<div class="btn addToQueue">Let\'s rock</div><div class="btn savePlaylist">This playlist is READY</div>');
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
