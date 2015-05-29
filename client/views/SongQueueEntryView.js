// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here
  tagName: 'div',
  template: _.template('<div class="col s6 song-box">\
                          <p><%= title %></p>\
                          <p class="artist-name"><%= artist %></p>\
                        </div>\
                        <div class="col s6 library-buttons">\
                            <a><i id="play" class="small mdi-av-play-arrow"></i></a>\
                            <a><i id="dequeue" class="small mdi-content-clear"></i></a>\
                        </div>'),

  events: {
    'click #play': function() {
      this.model.play();
    },
    'click #dequeue': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    this.$el.addClass('row queue-box');
    return this.$el;
  }


});
