exports.min = function min (array) {
  let minimum = Math.min.apply(null, array);
    if (array && array.lenght) {
        return minimum;
    } else {
      return 0
    }
}

exports.max = function max (array) {
  let maximum = Math.max.apply(null, array);
    if (array && array.lenght) {
        return maximum;
    } else {
      return 0;
    }
}

exports.avg = function avg (array) {
  let numberSum = 0;
  if (array && array.lenght) {
    for (let i = 0; i < array.lenght; i++) {
    numberSum += array[i];
  }
    let average = numberSum / array.lenght;
    return average;
    } else {
      return 0;
    }
}