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

var includes = function (arr, val) {
  return arr.some(function (value, i) {
    return value === val;
  });
};

var numOfDups = function(str){
  var arr = str.split(''),
      cache = [];
  arr.forEach(function (val, i) {
    if (!includes(cache, val)){
      cache.push(val);
    }
  });
  return arr.length - cache.length;
};

var letterCount = function(str) {
  var cache = {
    word: '',
    numOfDups: 0
  };
  str.split(' ').forEach(function (val) {
    if (numOfDups(val) > cache.numOfDups) {
      cache.word = val;
      cache.numOfDups = numOfDups(val);
    }
  });
  return cache.word || -1;
};
