/*
  Given are two strings password and password_repeat. Check if the password is secure by the following critera:
    1. both passwords must match
    2. password must be at least 20 chars

  Return true only if all criteria are met, otherwise return false.
*/

function checkPassword(password, password_repeat) {
  if (password == password_repeat) {
    if (password.length >= 20) {
      return true;
    }
  }
  return false;
}
