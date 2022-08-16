// const button = document.querySelector('button');

// button.addEventListener('click', (event) => {
//   const li = document.createElement('li')
//   const input = document.querySelector('input');
//   li.textContent = input.value;
//   const ul = document.querySelector('ul');
//   ul.appendChild(li);
//   input.value = '';
// })

// const bottom = document.getElementById('bottom')

// bottom.addEventListener('click', () => {
//   console.log('bottom was clicked')
// })

// const middle = document.getElementById('middle');

// middle.addEventListener('click', () => {
//   console.log('middle was clicked');
// })

// const first = document.getElementById('first');

// first.addEventListener('click', () => {
//   console.log('top was clicked')
// })

// const something = document.getElementById('something');
// const parentDiv = document.getElementById('parent-div');

// something.addEventListener('focus', () => {
//   console.log('something was focused')
// });

// parentDiv.addEventListener('click', (event) => {
//   console.log('clicked');
// });

// const delegatedUl = document.getElementById('delegation');

// const handleClick = (event) => {
//  if (event.target.classList.contains('yellow')) {
//   console.log(event.target.classList);
//   console.dir(event.target)
//  }
// }

// delegatedUl.addEventListener('click', handleClick)

// delegatedUl.removeEventListener('click', handleClick)

const headers = document.getElementById('headers');

headers.addEventListener('click', (event) => {
  console.log('this is a header')
})

const table = document.querySelector('table');

table.addEventListener('click', (event) => {
  if (event.target.localName === 'td') {
    console.log(event.target.textContent);
  }
})