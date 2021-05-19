function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function insertionSort(arr) {
  if (arr.length <= 1) return
  const n = arr.length
  for (let i = 1; i < n; i++) {
    const temp = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  return arr
}
