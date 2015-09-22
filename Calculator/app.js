document.addEventListener('DOMContentLoaded', function(){

// Basic calculator object literal
var calculator = {
	total: 0,
  add: function(value) {
    this.total += value;
  },
  subtract: function(value) {
    this.total -= value;
  },
  multiply: function(value) {
    this.total *= value;
  },
  divide: function(value) {
    this.total /= value;
  },
  clear: function() {
    this.total = 0;
  },
  equals: function() {
    return this.total;
  }
};

});
