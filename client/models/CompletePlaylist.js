var CompletePlaylist = Backbone.Model.extend({
  initialize: function(a, b) {
    this.playlist: new Playlist;
  }
  defaults: {
    name: 'New Playlist'
  }


});
