var CurrentSongView = Backbone.View.extend({
  initialize: function() {
  	
  },

  template: _.template('<span class="now-playing">Now Playing: <%= artist %> // <%= title %></span>\
  						<span class="play-count">Play Count: <%= playCount %> // Rating: <%= rating %></span></div>'),
  setSong: function(song){
    this.model = song;
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
