import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['rating-panel'],

  rating:     0,
  maxRating:  5,
  item:       null,
  "on-click":  '',

  stars: Ember.computed('rating', 'maxRating', function() {
    var fullStars = this.starRange(1, this.get('rating'), 'full');
    var emptyStars = this.starRange(this.get('rating') + 1, this.get('maxRating'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  starRange: function(start, end, type) {
    var starData = [];
    for (var i = start; i <= end; i++) {
      starData.push({ rating: i, full: type === 'full' });
    }
    return starData;
  },

  actions: {
    set: function(newRating) {
      this.get('on-click')({
        item: this.get('item'),
        rating: newRating
      });
    }
  }
});
