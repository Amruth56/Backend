const jsonString = '{ "name": "John", "age": 20, "city": "New York" }';
const jsonString2 = { name: "John", age: 20, city: "New York" };
const jsonObject = JSON.parse(jsonString); //  convert json string to object
console.log(jsonObject.name);
console.log(jsonString2.name);
const json = JSON.stringify(jsonString2);//convert object to JSOn string
console.log(`\n${json}`)
