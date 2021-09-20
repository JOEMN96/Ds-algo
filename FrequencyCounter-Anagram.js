function anagram(val1, val2) {
  if (val1.length !== val2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  val1.split("").forEach((letter) => {
    freq1[letter] = freq1[letter] ? freq1[letter] + 1 : 1;
  });
  val2.split("").forEach((letter) => {
    freq2[letter] = freq2[letter] ? freq2[letter] + 1 : 1;
  });
  //   console.log(freq1, freq2);
  for (const key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
  }

  return true;
}

const val = anagram("aaz", "zza");
console.log(val);
