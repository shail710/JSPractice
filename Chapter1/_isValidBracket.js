//Leetcode 20
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

function isValid(s) {
    if (s.length === 1)
      return false;
    if(s.length === 0)
        return true;
    
    let matchingOpeningBracket, char;
    let stack = [];
    
    let openingBrackets = ['[', '{', '(']
    let closingBrackets = [']', '}', ')']
    
    for (let i = 0; i < s.length; i++) {
      char = s[i];
    
      if (closingBrackets.indexOf(char) > -1) {
        matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)]
        if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }
    
    return (stack.length === 0);
    }