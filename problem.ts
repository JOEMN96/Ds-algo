function countWords(words1: string[], words2: string[]): number {
  let res = 0;
  let obj1: OBJ = {};
  let obj2: OBJ = {};

  let len = words1.length > words2.length ? words1.length : words2.length;

  for (let i = 0; i < len; i++) {
    if (i < words1.length) {
      obj1[words1[i]] ? obj1[words1[i]]++ : (obj1[words1[i]] = 1);
    }
    if (i < words2.length) {
      obj2[words2[i]] ? obj2[words2[i]]++ : (obj2[words2[i]] = 1);
    }
  }

  for (let i = 0; i < words1.length; i++) {
    let word = words1[i];
    if (obj1[word] == 1 && obj2[word] == 1) {
      res++;
    }
  }

  return res;
}

interface OBJ {
  [key: string]: string | any;
}
console.log(
  countWords(
    ['rsvyxfkbmllnsvfmiskouagjpymub', 'xqadhorgvguprqp'],
    [
      'rsvyxfkbmllnsvfmiskouagjpymub',
      'xqadhorgvguprqp',
      'wvtjffkonflbmdmw',
      'olekom',
      'tcnrpyshlqvsisnk',
      'jqwigwkehsvyylrixvbmrq',
      'irrjybaruytqixlozgtb',
      'ebsxabicklczdjoqahxybuvav',
      'k',
      'hoayhbdmxipzqxkkarjcfszgaolxo',
    ]
  )
);
