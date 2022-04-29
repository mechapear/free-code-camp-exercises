// จำนวนเฉพาะ
// returns the sum of all prime numbers that are less than or equal to num.

// check if num is primes by division, if num is divisible by any number, it is not a prime number
// sum all numbers that are primes

function isPrime(num) {
  // Math.sqrt() function returns the square root of a number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function sumPrimes(num) {
  let sumNum = 0

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sumNum = sumNum + i
    }
  }
  console.log({ sumNum })
  return sumNum
}
