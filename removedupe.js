function checkdupe(a) {
  var giatrisosanh = a[0];
  var solanlap = 0;
  if (a.length != 0) {
    for (var i in a) {
      if (a[i] === giatrisosanh) {
        solanlap++;
      }
    }
    if (solanlap == 1) {
      return 3;
    } else return 2;
  } else return 1;
}
function removedupe(input) {
  var output = [];
  while (checkdupe(input) > 1) {
    if (checkdupe(input) == 3) {
      output.push(input[0]);
      input.shift();
    } else {
      input.shift();
    }
  }
  return output;
}
