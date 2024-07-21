const gcd = require("./gcd");

function gcdOfN(arr) {
  let ans = gcd(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) {
    ans = gcd(ans, arr[i]);
  }
  return ans;
}

console.log(gcdOfN([10, 20, 40, 12, 6]));
