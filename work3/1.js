function summary() {
  var elements = Array.prototype.slice.call(arguments);
  var summary = elements.reduce(function(el1, el2) {
    return el1 + el2;
  })
  return summary;
}
console.log(summary(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));
