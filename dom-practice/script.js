const titleEl = document.getElementById('title');

console.dir(titleEl);

const titleEl2 = document.querySelector('.main-title')

console.log(titleEl2);

const h2 = document.querySelector('h2');

console.log(h2);

const h2s = document.querySelectorAll('h2');

console.log(h2s);

// getElementById selects ONE element by finding its id within the html page.

// querySelector is used when you want to select the FIRST item on the page that matches whatever you give it.

// querySelectorAll is used when you want to select ALL of the items on the page that match whatever you give it

const domStuff = document.getElementById('dom-stuff')

domStuff.textContent = '<p>This is some DOM stuff</p>'

// document.getElementById('dom-stuff').textContent = 'hello'

domStuff.style.textAlign = 'center'
domStuff.style.color = 'red'

const testDiv = document.getElementById('test-div');

testDiv.style.background = 'yellow'

const image = document.querySelector('img'); // selects our image tag

console.log(image.hasAttribute('src')); // hasAttribute returns a boolean of whether or not the element has the specified attribute

image.setAttribute('src', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg') // setAttribute sets the attribute specified to the value specified

console.log(image.getAttribute('src')) // getAttribute returns the value of the attribute specified

const listItems = document.querySelectorAll('li');

for (item of listItems) {
  if (item.hasAttribute('class') && item.getAttribute('class') === 'yellow') {
    console.log(item.textContent);
  }
}