function palindrome(str) {
  let backward = ""; //To store the reversed string.
  let regEx = /[^a-z0-9]/g; //Regular expression fo identify non alphanumeric characters in the string.
  
  str = str.toLowerCase().trim().replace(regEx, ""); //String functions to make all characters lowercase, trim the string & remove non-alphanumeric characters. 
  
  for(let x = str.length - 1; x >= 0; x--) backward += str.substr(x, 1); //Starting from the back of the string store each letter to variable backward

  if(str == backward) return true; //Compare str and backward then return true if they are the same 
  else return false;
}

palindrome("eye");
