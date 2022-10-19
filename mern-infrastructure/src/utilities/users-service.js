import * as usersAPI from './users-api';

//-------
// getToken
//-------

// This function takes the token from local storage and checks if it exists first. Then, it parses the token and decodes it in the browser, checking if it is expired yet. Finally, if those two checks pass, it sends the token to the next function.

export function getToken() {
  const token = localStorage.getItem('token')
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));

  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null
  }

  return token;
}

//-------
// getUser
//-------

// This function takes the token from the previous function, parses the data from it, and (if the data exists) sends it on to the next function.

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

//-------
// signUp
//-------

// This function grabs the token from the API, sets it to a key of 'token' in localStorage, and then runs getUser to grab the information from it and send it to our webpage.

export async function signUp(userData) {
  const response = await usersAPI.signUp(userData);

  localStorage.setItem('token', response.jwt_token)

  return getUser();
}

export async function logIn(userData) {
  const response = await usersAPI.logIn(userData);
  localStorage.setItem('token', response.jwt_token)

  return getUser();
}