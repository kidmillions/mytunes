var PlaylistEntryView = Backbone.View.extend({
  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div><div class="removeFromPlaylist">Remove from Playlist</div>\
                        <div class="moveUp">Move Up</div><div class="moveDown">Move Down</div>'),

  events: {
    'click .removeFromPlaylist': 'removeFromPlaylist',
    'click .moveDown': 'moveDown',
    'click .moveUp': 'moveUp'
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  removeFromPlaylist: function() {
    this.model.removeFromPlaylist();
  },

  moveDown: function() {
    this.model.moveDown();
  },

  moveUp: function() {
    this.model.moveUp();
  }

});
