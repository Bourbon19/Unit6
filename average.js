// Dana Spears - Unit 6 Assignment. Chapter 5, Exercise 3
function average(var1) {
var sum = 0;
var avrg = 0;
  
for (var i = 0; i < var1.length; i += 1) {
      sum += parseInt( var1[i], 10 ); 
  }
avrg = sum/var1.length; 
alert(avrg);  
}

