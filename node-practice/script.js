// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello', () => {
//   console.log('done creating file!')
// });

// let daysOfWeek = require('./days-of-week');
// let day = daysOfWeek.getWeekday(8);
// console.log(day);

// const request = require('request');
// request(
// 	'http://jsonplaceholder.typicode.com/users',
// 	function(err, res, body) {
// 		console.log(body);
// 	}
// );

// const axios = require('axios');

// const getData = async () => {
//   const response = await axios.get('http://jsonplaceholder.typicode.com/users')
//   console.log(response.data);
// }

// getData();

// axios.get('http://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     console.log(response.data)
//   })

const random = require('./utilities/random');
for (let i = 0; i < 10; i++) {
  console.log( random(1, 20) );
}

const { area, circumference } = require('./utilities/circle');

console.log(area(50));

console.log(circumference(75));