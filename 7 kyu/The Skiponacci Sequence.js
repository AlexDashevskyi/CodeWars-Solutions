{/*
Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.
*/}

function skiponacci(n) {
  let arr = [1, 1];
  if (n === 1) return '1';
  if (n === 2) return '1 skip';
  for (let i = 2; i < n; i++){
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  const stringArray = arr.map((el, i) => {
    return (i % 2 === 0) ? el : 'skip';
  })
  return stringArray.join(' ')
}
