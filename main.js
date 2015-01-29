var firstReverse = function(str) {
  return str.split('').reverse().join('');
};

var swapCase = function(str) {
  return str.split('').map(function (val) {
    if (val.match(/[a-z]/)) {
      val = val.toUpperCase();
    } else if (val.match(/[A-Z]/)) {
      val = val.toLowerCase();
    }
    return val;
  }).join('');
};

var letterCount = function(str) {

};
