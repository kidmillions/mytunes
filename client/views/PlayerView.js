// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // var context = this;
    // this.$el.on('ended', context.endSong);
  },

  events: {
    'ended': 'endSong'
  },

  // events: {
  //   'ended audio': function() {
  //     console.log('this current song has ended')
  //     this.model.ended();
  //   }
  // },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  endSong: function(song){
    this.model.ended();
  },

  render: function(){
    this.$el.attr('id', 'song-player');
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
