function canBeTypedWords(text: string, brokenLetters: string): number {
  let res = 0;
  let ar = text.split(' ');

  ar.forEach((sen) => {
    for (let i = 0; i < brokenLetters.length; i++) {
      if (!sen.indexOf(brokenLetters[i])) {
        console.log(sen);
        res++;
      }
    }
  });

  return res;
}
console.log(canBeTypedWords('a b c d e', 'abcde'));
