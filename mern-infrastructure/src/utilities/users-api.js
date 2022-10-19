import axios from 'axios';
const BASE_URL = '/api/users';



export async function signUp(userData) {
  // This is how to do a post request using FETCH:
  // const response = await fetch(BASE_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(userData)
  // });

  // This is the better way, using AXIOS!
  const response = await axios.post(BASE_URL, userData)
  if (response.status === 201) {
    return response.data
  } else {
    throw new Error('Invalid Sign Up!')
  }
}

export async function logIn(userData) {
  const response = await axios.post(`${BASE_URL}/login`, userData)
  if (response.status === 200) {
    return response.data
  } else {
    throw new Error('Invalid Sign Up!')
  }
}