function numberOfZeros(var1) {
   var noz = 0;
   for (var i = 0, n = var1.length; i < n; i += 1) {
        if (var1[i] === 0) {
        noz += 1;
        }
  }
   alert("The number of zeros is " + noz);
}
