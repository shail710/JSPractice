function indexOf(str, substr) {
    if(!str || !substr || typeof str !== 'string' || typeof substr !== 'string') return -1;

    for(let i = 0; i < str.length; i++) {
      for(let q = 0; q < substr.length; q++) {
        if (str[i+q] !== substr[q]) {
          break;
        }

        if(str[i - 1] !== ' ') break;

        if (q === substr.length - 1) {
          return i;
        } 
      }
    }
    return -1;
}


// Input: str = 'How many bananas are on the table?' substr = 'bananas'
// Output = 9

// Input: str = 'How many sbananas are on the table?' substr = 'bananas'
// Output: -1

// Input: str = 'How many bananass are on the table?' substr = 'bananas'
// Output: -1

// Input: str = '' substr = 'bananas'
// Output: -1

// Input: str = 'How many bananas are on the table?' substr = ''
// Output: -1

// Input: str = 'oranges' substr = 'bananas'
// Output: -1

// Input: str = 'How many Bananas are on the table?' substr = 'bananas'
// Output: -1

// Input: str = [] substr = 'bananas'
// Output: -1

// Input: str = 'How many bananas are on the table?' substr = []
// Output: -1

// Input: str = 123 substr = 'bananas'
// Output: -1

// Input: str = 'How many bananas are on the table?' substr = 123
// Output: -1

// Input: str = '' substr = ''
// Output: -1