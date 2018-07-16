var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
//destructuring with arrays
var arr = [4, 5, 6, 7, 8];
var a = arr[0], b = arr[1], rest = arr.slice(2);
console.log(a);
console.log(rest); // rest = [6,7,8]
/******************************************/
//destructuring with objects
var obj = { x: 7, y: 9, z: 10 };
var x = obj.x, restObj = __rest(obj, ["x"]); //{y:9,z:10} assigned in restObj
console.log(x);
var a = obj.x, restObj = __rest(obj, ["x"]);
console.log(a);
console.log(restObj);
