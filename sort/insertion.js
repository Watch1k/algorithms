const arr = [5, 2, 4, 6, 1, 3]

const insertionSort = arr => {
  const res = [...arr]

  for (let i = 1, len = res.length; i < len; i++) {
    const arg = res[i]
    let j = i - 1
    while (arg < res[j]) {
      res[j + 1] = res[j]
      j = j - 1
    }
    res[j + 1] = arg
  }

  return res
}

console.log('insertionSort', insertionSort(arr))

const insertionSortReversed = arr => {
  const res = [...arr]

  for (let i = 1, len = res.length; i < len; i++) {
    const arg = res[i]
    let j = i - 1
    while (arg > res[j]) {
      res[j + 1] = res[j]
      j = j - 1
    }
    res[j + 1] = arg
  }

  return res
}

console.log('insertionSortReversed', insertionSortReversed(arr))
