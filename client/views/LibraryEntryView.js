// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div> \
                        <div id = "play">Play</div> \
                        <div id="enqueue">Add to Queue</div>\
                        <div>Play Count: (<%= playCount %>)</div>'),

  events: {
    'click #play': function() {
      this.model.play();
      this.model.playNow();
    },
    'click #enqueue': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
