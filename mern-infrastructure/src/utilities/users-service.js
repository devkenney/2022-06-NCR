import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  return token;
}