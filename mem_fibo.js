// find fibo memorized

function fib(n) {
  var memo = {};
  if(memo.hasOwnProperty(n)){
    return memo[n];
  }
  if (n <= 2){
    f = 1;
  } else{
    f = fib(n-1) + fib(n-2);
    memo[n] = f;
  }
  
  return f;
}

console.log(fib(77));