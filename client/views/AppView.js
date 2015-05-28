// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistView = new PlaylistView ({collection: this.model.get('playlist')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.currentSongView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      '<h2>CURRENTLY PLAYING</h2>',
      this.currentSongView.$el,
      '<h2>All Songs</h2>',
      this.libraryView.$el,
      '<h2>Song Queue</h2>',
      this.songQueueView.$el,
      '<h2>Playlist! (aka Song Queue List!)</h2>',
      this.playlistView.$el
    ]);
  }

});
