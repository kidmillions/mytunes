// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var CurrentSongView = Backbone.View.extend({
  // your code here!
  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div>'),
  setSong: function(song){
    this.model = song;
    this.render();
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }


});
