function anagram(val1, val2) {
  if (val1.length !== val2.length) return false;

  let lookup = {};

  for (let i = 0; i < val1.length; i++) {
    let letter = val1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  console.log(lookup);

  for (let j = 0; j < val2.length; j++) {
    let letter = val2[j];
    if (lookup[letter]) {
      lookup[letter] = lookup[letter] - 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(anagram("JJBVV", "JJBVV"));
