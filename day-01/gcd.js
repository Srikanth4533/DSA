function gcd(a, b) {
  while (a !== 0) {
    let a_ = b % a;
    let b_ = a;
    a = a_;
    b = b_;
  }
  return b;
}

console.log(gcd(10, 18));
console.log(gcd(20, 28));

module.exports = gcd;
