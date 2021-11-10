function reversePrefix(word: string, ch: string): string {
  let ours = word.substring(0, word.indexOf(ch) + 1);
  let ar = word.substring(word.indexOf(ch) + 1);
  let j = ours.length - 1;
  let str = '';
  while (j >= 0) {
    str += ours[j];
    j--;
  }
  return str + ar;
}

console.log(reversePrefix('abcdefd', 'd'));
