// userModel.js

import Parse from "parse";

// SIGN UP
export async function signUp(username, password) {
  const user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  return await user.signUp();
}

// LOG IN
export async function logIn(username, password) {
  return await Parse.User.logIn(username, password);
}

// GET CURRENT USER
// returns the logged-in Parse.User, or null if nobody is logged in
export function getCurrentUser() {
  return Parse.User.current();
}

// UPDATE CURRENT USER
export async function updateCurrentUser(changes) {
  const user = Parse.User.current();
  Object.entries(changes).forEach(([key, value]) => user.set(key, value));
  return await user.save();
}

// DELETE CURRENT USER
export async function deleteCurrentUser() {
  const user = Parse.User.current();
  await user.destroy();
  await Parse.User.logOut();
}

// LOG OUT
export async function logOut() {
  await Parse.User.logOut();
}