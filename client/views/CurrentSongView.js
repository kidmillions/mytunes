var CurrentSongView = Backbone.View.extend({
  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div><div>Play Count: <%= playCount %></div>'),
  setSong: function(song){
    this.model = song;
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
  }
});
