//destructuring with arrays
var arr = [4,5,6,7,8];

var  [a,b,...rest] = arr; 

console.log(a);
console.log(rest); // rest = [6,7,8]

/******************************************/

//destructuring with objects
var obj = {x:7, y:9, z:10};

var {x, ...restObj} = obj; //{y:9,z:10} assigned in restObj
console.log(x);
var {x:a, ...restObj} = obj; //value of x is assigned to a
console.log(a);
console.log(restObj);

