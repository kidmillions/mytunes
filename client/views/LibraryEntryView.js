// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',

  template: _.template('<div class="col s3 song-box">\
                          <p><%= title %></p>\
                          <p class="artist-name"><%= artist %></p>\
                        </div>\
                        <div class="col s5 library-buttons">\
                            <a><i id="play" class="small mdi-av-play-arrow"></i></a>\
                            <a><i id="enqueue" class="small mdi-av-queue"></i></a>\
                            <a><i id="playlisted" class="small mdi-av-playlist-add"></i></a>\
                        </div>\
                        <div class="col s1">Rating:</div>\
                        <div class="col s2">\
                          <div class="input-field">\
                            <select name="rating" class="rating browser-default">\
                              <option value="0">0</option>\
                              <option value="1">1</option>\
                              <option value="2">2</option>\
                              <option value="3">3</option>\
                              <option value="4">4</option>\
                              <option value="5">5</option>\
                            </select>\
                          </div>\
                        </div>\
                        <div class="col s1 playcount-box">\
                          <span><%= playCount %> plays</span>\
                        </div>'),

  events: {
    'click #play': function() {
      // this.model.play();
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
    this.$el.html(this.template(this.model.attributes));
    // this.$el.find('ul').attr('id', ('dropdown' + this.model.cid));
    // this.$el.find('.dropdown-button').attr('data-activates', ('dropdown' + this.model.cid));
    this.$el.addClass('row library-box');

    this.$el.find('.rating').val(this.model.get('rating'));
    this.$el.find('select').material_select();
    return this.$el;
  }

});
