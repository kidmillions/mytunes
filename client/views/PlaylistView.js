var PlaylistView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add remove', this.render, this);
  },

  render: function(){
    this.$el.html('');
    this.collection.forEach(this.renderPlaylistView, this);
  },

  renderPlaylistView: function(song) {
    var playlistEntryView = new PlaylistEntryView({model: song});
    this.$el.append(playlistEntryView.render());
  }

});
