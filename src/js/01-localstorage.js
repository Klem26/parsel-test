// const user = {
//     name: 'Mango',
//     age: 2,
// };
// console.log(JSON.stringify(user));

// const savedUserData = '{"name":"Mango","age":2}';
// console.log(JSON.parse(savedUserData));

console.log(localStorage);

// localStorage.setItem('my-data1', 'hello');
localStorage.setItem('my-data2', '{"name":"Mango","age":2}');

const savedData = localStorage.getItem('my-data2');
const parseData = JSON.parse(savedData )
console.log(parseData);

 