function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(21));
console.log(isPrime(17));
console.log(isPrime(11));
console.log(isPrime(1));
console.log(isPrime(2));
