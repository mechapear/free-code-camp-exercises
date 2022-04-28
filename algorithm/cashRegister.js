// หาว่าต้องทอนเงินเท่าไหร่ (price - cash)
// มี cid อยู่เท่าไหร่ (เอาค่ามาบวกกันทั้งหมด)
// เอาเงินที่ต้องทอนไป่ดูใน cid ว่าพอมั้ย
// (change > cid) ถ้าไม่พอก็ return {status: "INSUFFICIENT_FUNDS", change: []}
// (change = cid) ถ้าพอดีก็ return {status: "CLOSED", change: [...]} change ก็คือค่า cid
// (change < cid) ถ้าทอนพอและเงินเหลือ return {status: "OPEN", change: [...]}, change sort จากค่ามากไปน้อย

// เก็บข้อมูลแบบ array จะเหมาะกับการใช้ข้อมูลในรูปแบบลำดับ และมักจะเอาข้อมูลไปใช้ทีเดียวทั้งชุดเลย
// แต่ถ้้าต้องการใช้ข้อมูลแค่ item เดียว โดยที่รู้ key อยู่แล้ว ควรเก็บข้อมูลด้วย {} จะสามารถเอาข้อมูลที่ต้องการไปใช้ได้ง่ายกว่า
// ตัวอย่าง ถ้ารู้ key แต่เก็บข้อมูลแบบ Array จ้องต้องใช้ .find() หา item ที่ต้องการ แต่ Object จะใช้ Obj.key ได้เลย
const currencyUnitInCent = {
  'ONE HUNDRED': 10000,
  TWENTY: 2000,
  TEN: 1000,
  FIVE: 500,
  ONE: 100,
  QUARTER: 25,
  DIME: 10,
  NICKEL: 5,
  PENNY: 1,
}

function checkCashRegister(price, cash, cid) {
  let output = {
    status: '',
    change: [],
  }

  // In order to avoid floating point error,
  // change currency unit from dollar to cent by multiplying by 100
  const changeInCent = (cash - price) * 100

  const cidCent = cidDollarToCent(cid)

  // To return the change correctly, if we needed to return 100 dollars for the change,
  // and we had [['PENNY', 100], ['ONE HUNDRED', 100]] in the drawer,
  // we would need to return ['ONE HUNDRED', 100] instead of ['PENNY', 100]
  // that means, we have to return the highest value first.
  // So, we need to sort the cid because the cid from the parameter
  // is not guaranteed to be sorted they way we want.
  const sortedCid = sortCid(cidCent)

  // Calculate the total cash in the drawer
  // and check if the cash in the drawer is enough for the change.
  const totalCid = sumCid(sortedCid)

  const totalChangeInCent = checkEnoughCid(changeInCent, sortedCid)

  if (changeInCent === totalCid) {
    output.status = 'CLOSED'
    output.change = cid
    return output
  }

  if (changeInCent > totalCid || totalChangeInCent.length === 0) {
    output.status = 'INSUFFICIENT_FUNDS'
    return output
  }

  if (changeInCent < totalCid || totalChangeInCent.length !== 0) {
    output.status = 'OPEN'
    output.change = totalChangeInDollar(totalChangeInCent)
    return output
  }

  return output
}

// In order to avoid floating point error,
// change currency unit from dollar to cent by multiplying by 100
function cidDollarToCent(cid) {
  return cid.map(([name, value]) => {
    return [name, value * 100]
  })
}

// change currency unit from cent to dollar
function totalChangeInDollar(totalChange) {
  return totalChange.map(([name, value]) => {
    return [name, value / 100]
  })
}

// sort cid from highest to lowest value
function sortCid(cidCent) {
  return cidCent.sort(([curUnit1], [curUnit2]) => {
    const curValue1 = currencyUnitInCent[curUnit1]
    const curValue2 = currencyUnitInCent[curUnit2]
    return curValue2 - curValue1
  })
}

// Example สำหรับกรณี currencyUnit เก็บข้อมูลแบบ array
// function sortCid(cid) {
//   return cid.sort(([curUnit1], [curUnit2]) => {
//     const curItem1 = currencyUnit.find((item) => {
//       return item.name === curUnit1
//     })
//     const curItem2 = currencyUnit.find((item) => {
//       return item.name === curUnit2
//     })
//     return curItem2.value - curItem1.value
//   })
// }

function sumCid(sortedCid) {
  return sortedCid.reduce((sumNum, [, num]) => {
    return num + sumNum
  }, 0)
}

// check if the wanted cid is enough for the change
function checkEnoughCid(changeInCent, sortedCid) {
  let changeLeft = changeInCent
  let totalChange = []
  sortedCid.forEach(([name, value]) => {
    // if the currency unit is bigger than the change, we don't need to check it.
    if (currencyUnitInCent[name] > changeLeft || value === 0) {
      // skip this loop / continue to the next loop
      return undefined
    }

    // If the currency unit is smaller than or equal to the change,
    // we need to check if we have enough value by comparing the value and the change.
    if (currencyUnitInCent[name] <= changeLeft) {
      // If the value is less than the change, check how much the money we have.
      if (value <= changeLeft) {
        // If the currency unit is penny the smallest unit, we don't have enough money to give change.
        if (name === 'PENNY') {
          return undefined
        }
        // return all the money we have in this unit
        totalChange.push([name, value])
        changeLeft = changeLeft - value
      } else {
        // If the value is equal or more than the change, then return the change.
        // Calculating the biggest value that we can return.
        // Math.trunc() cuts off the dot and the digits to the right of it, no matter whether the argument is a positive or negative number.
        const currentChange =
          currencyUnitInCent[name] *
          Math.trunc(changeLeft / currencyUnitInCent[name])
        totalChange.push([
          name,
          changeLeft % currencyUnitInCent[name] === 0
            ? changeLeft
            : currentChange,
        ])
        changeLeft = changeLeft - currentChange
      }
    }
  })
  return totalChange
}

// 1.ถ้าแบงค์ใหญ่กว่า change ข้าม
// 2.ถ้าแบงค์<=change ให้ดู value ว่าพอรึป่าว
//   ถ้าไม่พอก็ข้าม
//   ถ้าพอก็เอาเงินไปทอน เท่ากับ change

module.exports = { checkCashRegister }