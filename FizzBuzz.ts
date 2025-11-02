function fizzBuzz(n: number): string[] {
  let arr: string[] = [];
  for (let i = 1; i <= n; i++) {
    let res;
    if(i % 3 === 0 && i % 5 === 0)
        res = "FizzBuzz";
    else if(i % 3 === 0)
        res = "Fizz";
    else if(i % 5 === 0)
        res = "Buzz";
    else
        res = i.toString();
    arr.push(res)
  }
  return arr;
}
