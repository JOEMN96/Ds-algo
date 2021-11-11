function reverseWords(s: string): string {
  let arr = s.split(' ');
  // @ts-ignore
  let res = arr.map((item: string) => {
    let res = item.split('');
    let start = 0;
    let end = res.length - 1;
    while (start < end) {
      let temp = res[start];
      // @ts-ignore
      res[start] = res[end];
      // @ts-ignore
      res[end] = temp;
      start++;
      end--;
    }
    return res.join('');
  });
  console.log(res);
  return res.join(' ');
}

console.log(reverseWords('Let"s take LeetCode contest'));
