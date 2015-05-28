// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,
  comparator: function(songs){
    return -songs.get('rating');
  },
  initialize: function(){
    this.on('change', this.sort, this);
  }
});

