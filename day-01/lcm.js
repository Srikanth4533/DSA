const gcd = require("./gcd");

function lcm(a, b) {
  let gcd_ = gcd(a, b);
  let ans = (a * b) / gcd_;
  return ans;
}

console.log(lcm(12, 18));
