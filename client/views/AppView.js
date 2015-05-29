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
    console.log(this.playerView.$el);
    
    var $nav = $('<div class="navbar-fixed"><nav><div class="nav-wrapper"><div class="right"></div></div></nav></div>');
    $nav.find(".nav-wrapper").prepend(this.playerView.$el);
    $nav.find(".right").append(this.currentSongView.$el);

    var $container = $('<div class="container"></div>');
    var $libraryRow = $('<div class="row"><div class="col s12"></div></div>')
    var $queuePlaylistRow = $('<div class="row"><div class="col s6 queue-box"></div><div class="col s6 playlist-box"></div></div>')
    $libraryRow.append(this.libraryView.$el);
    $queuePlaylistRow.find('.queue-box').append(["<h3>My Queue</h3>",this.songQueueView.$el]);
    $queuePlaylistRow.find('.playlist-box').append(["<h3>My Playlist</h3>",this.playlistView.$el]);
    $container.append([$queuePlaylistRow, $libraryRow])

    return this.$el.html([
      $nav,
      $container
    ]);
  }

});
