// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// sum the fibonacci num until that num less than or equal to given num (loop)
// collect the fibonacci then check if it is odd
// check if num is an odd num or even by using number % 2 !== 0, that is odd num

// 1
function sumFibs(num) {
  let fibNums = [1, 1]
  for (let i = 1; i <= num - 2; i++) {
    const currentNum = fibNums[i - 1] + fibNums[i]

    if (currentNum < num) {
      fibNums.push(currentNum)
    } else if (currentNum === num) {
      fibNums.push(currentNum)
      break
    } else {
      break
    }
  }

  let sumOddNum = 0
  for (let i = 0; i < fibNums.length; i++) {
    if (fibNums[i] % 2 !== 0 && fibNums[i] <= num) {
      sumOddNum = sumOddNum + fibNums[i]
    }
  }

  return sumOddNum
}

// 2
function sumFibs(num) {
  let fibNums = [1, 1]
  for (let i = 1; i <= num - 2; i++) {
    const currentNum = fibNums[i - 1] + fibNums[i]
    if (currentNum < num) {
      fibNums.push(currentNum)
    } else if (currentNum === num) {
      fibNums.push(currentNum)
      break
    } else {
      break
    }
  }

  let sumOddFibNum = fibNums
    .filter((fibNum) => fibNum % 2 !== 0)
    .reduce((sumOdd, oddNum) => sumOdd + oddNum, 0)

  return sumOddFibNum
}

sumFibs(4) // return 5
sumFibs(1000) // return 1785
sumFibs(4000000) // return 4613732
