var n = 695;
var p = 2;
var newArray = n.toString().split('');
  var num = 0;
  for (var i = 0; i<newArray.length; i++){
     num = num + Math.pow(newArray[i], p+i);
  }
 console.log(num);
