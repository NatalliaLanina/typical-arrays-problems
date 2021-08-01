
exports.min = function min (array) {
  if ( arguments.length == 0 || array.length == 0 ) {
    return 0;
  };
  let result = Math.min.apply(null, array);
  return result;
}

exports.max = function max (array) {
  if ( arguments.length == 0 || array.length == 0) {
    return 0;
  };
  let result = Math.max.apply(null, array);
  return result;
}

exports.avg = function avg (array) {
  if ( arguments.length == 0 || array.length == 0) {
    return 0;
  }
  return array.reduce((a, b) => (a + b)) / array.length;
}
