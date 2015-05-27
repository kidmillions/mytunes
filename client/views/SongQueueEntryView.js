// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td id = "play">Play</td><td id="dequeue">Remove From Playlist</td>'),

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
