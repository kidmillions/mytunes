// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<div>(<%= artist %>)</div><div><%= title %></div>\
                        <div id = "play">Play</div>\
                        <div id="enqueue">Add to Queue</div>\
                        <div id="playlisted">Add to Playlist</div>\
                        <div>Play Count: (<%= playCount %>)</div>\
                        <div><select name="rating" class="rating"><option value="0">0</option><option value="1">1</option>\
                        <option value="2">2</option><option value="3">3</option>\
                        <option value="4">4</option><option value="5">5</option>\
                        </select></div><div><%= rating %></div>'),

  events: {
    'click #play': function() {
      this.model.play();
      this.model.playNow();
    },
    'click #enqueue': function() {
      this.model.enqueue();
    },
    'change .rating' : function(){
      var rating = this.$el.find('.rating').val();
      this.model.set('rating', rating);
    },
    'click #playlisted' : function(){
      this.model.playlisted();
    }
  },

  render: function(){
    // console.log(this.model.get('rating'));
    this.$el.html(this.template(this.model.attributes));
    this.$el.find('.rating').val(this.model.get('rating'));
    return this.$el;
  }

});
