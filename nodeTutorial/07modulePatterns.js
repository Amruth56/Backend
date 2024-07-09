 var adder = function(a, b){
    return `sum of ${a} and ${b} is ${a+b}`;
 }
 var sub = function(a, b){
    return `Difference of ${a} and ${b} is ${a-b}`;
 }
 var mul = function(a, b){
    return `multiplication of ${a} and ${b} is ${a*b}`;
 }

 module.exports.divi = function(a, b){
   return `Division of ${a} and ${b} is ${a/b}`
 }
 module.exports.add = adder
 module.exports.substract = sub
 module.exports.multiply = mul



//  or

// module.exports = {
//    add: adder,
//    substract: sub,
//    multiply: mul,
// }
