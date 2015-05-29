// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('playlist', new Playlist());
    // this.set('playlists', new Playlists())


    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    this.get('playlist').on('savePlaylist', function() {
      var newPlaylist = new CompletePlaylist(a, b);
      this.get('playlists').add(newPlaylist);
    });


    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
    }, this);

    params.library.on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('playNow', function(song) {
      this.get('songQueue').shift();
      this.get('songQueue').unshift(song);
    }, this);

    params.library.on('playlisted', function(song){
      this.get('playlist').add(song);
    }, this);

    this.get('playlist').on('removeFromPlaylist', function(song) {
      this.get('playlist').remove(song);
    }, this);

    this.get('playlist').on('moveDown', function(song) {
      var holdID = this.get('playlist').indexOf(song);
      this.get('playlist').remove(song);
      this.get('playlist').add(song, {at: (holdID + 1)});
    }, this);

    this.get('playlist').on('moveUp', function(song){
      var holdID = this.get('playlist').indexOf(song);
      if (holdID > 0) {
        this.get('playlist').remove(song);
        this.get('playlist').add(song, {at: (holdID - 1)});
      }
    }, this);
  }
});
