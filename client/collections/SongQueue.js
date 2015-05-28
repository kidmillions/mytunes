// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', this.playFirst, this);
    this.on('ended', this.playNext, this);
  },

  playFirst: function() {
    if(this.length === 1){
      this.at(0).play();
    }
  },
  playNext: function() {
    this.at(0).dequeue();
    if (this.length > 0) {
      this.at(0).play();
    }
  }
});
