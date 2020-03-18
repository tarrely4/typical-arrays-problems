
exports.min = function min (array) {
  if (array == undefined || array[0] == undefined) {
    return 0;
  } else {
    return Math.min.apply(null, array);
  }
}

exports.max = function max (array) {
  if (array == undefined || array[0] == undefined) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array[0] == undefined) {
    return 0;
  } else {
    return array.reduce((a, el) => (a + el)) / array.length;
  }
}
