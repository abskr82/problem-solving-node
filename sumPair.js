// http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/
// Write a C program that, given an array A[] of n numbers and another number x,
//  determines whether or not there exist two elements in S whose sum is exactly x. 

var arr = [1, 4, 45, 6, 10, 8,8];

var sum = 16;
var obj = {};
for ( var i = 0; i < arr.length; i++) {
  var diff = sum - arr[i];
  if (diff >= 0 && obj.hasOwnProperty(arr[i])){
    console.log('Pair is ', diff, arr[i])
  }
  obj[diff] = 1;
}

