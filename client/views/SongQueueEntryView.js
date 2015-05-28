// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div>\
    <div id = "play">Play</div><div id="dequeue">Remove From Playlist</div>'),

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
    return this.$el;
  }


});
