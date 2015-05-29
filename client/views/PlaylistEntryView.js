var PlaylistEntryView = Backbone.View.extend({
  template: _.template('<div class="col s6 song-box">\
                            <p><%= title %></p>\
                              <p class="artist-name"><%= artist %></p>\
                            </div>\
                            <div class="col s6 playlist-buttons">\
                                <a><i class="removeFromPlaylist small mdi-content-clear"></i></a>\
                                <a><i class="moveUp small mdi-hardware-keyboard-arrow-up"></i></a>\
                                <a><i class="moveDown small mdi-hardware-keyboard-arrow-down"></i></a>\
                            </div>'),


  events: {
    'click .removeFromPlaylist': 'removeFromPlaylist',
    'click .moveDown': 'moveDown',
    'click .moveUp': 'moveUp'
  },


  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.addClass('row playlist-box');
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
