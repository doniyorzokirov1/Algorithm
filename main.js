let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function renderArray(arr) {
  let makeArr = Math.ceil(arr.length / 4)
  let result = []

  for (let i = 0; i < makeArr; i++) {
    let newArr = []

    for (let j = 0; j < 4; j++) {
      let shiftArr = arr.shift()

      if (shiftArr !== undefined) {
        newArr.push(shiftArr)
      } else {
        newArr.push(null)
      }
    }
    result.push(newArr)
  }
  return result
}
console.log(renderArray(arr))
