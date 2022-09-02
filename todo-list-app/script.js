// SELECTING ALL OF OUR ELEMENTS:

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.getElementById('todos');

// --------------------------------
// CODE FOR THE INPUT/BUTTON
// --------------------------------

buttonEl.addEventListener('click', () => {
  const listItem = document.createElement('li');
  const text = inputEl.value;
  const testDiv = document.createElement('div');
  testDiv.textContent = text;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'DELETE';
  listItem.appendChild(testDiv);
  listItem.appendChild(deleteButton)
  listEl.appendChild(listItem);
  inputEl.value = ''
});

// line 12: creates a new li to be appended to the list later
// line 13: grabs the text from the input
// line 14: creates a new div to be used later
// line 15: sets the textContent of the div to the value of the input
// line 16: creates a new button to be used to delete the todo later
// line 17: sets the textContent of the button to 'DELETE'
// line 18: appends the testDiv to the list item
// line 19: appends the delete button to the list item
// line 20: appends the list item to the ul
// line 21: sets the value of the input back to blank

// overall: creates a list item, sets its text to the value in the input, adds a delete button, and adds the whole thing to the page.

// --------------------------------
// DELETE BUTTON / EVENT DELEGATION
// --------------------------------

listEl.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    listEl.removeChild(event.target.parentNode);
  }
});

// line 41: adds an event listener to the ENTIRE UL that is in the html. This is to use EVENT DELEGATION to basically add this event listener to all of the list items at the same time.

// line 42: checks if the target of the click event is a button.

// line 43: if the target IS a button, it removes the li that it is attached to. It does this by grabbing its parent's (li) parent (ul) and removing the button's parent (li).