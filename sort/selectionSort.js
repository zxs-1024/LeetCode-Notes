function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function selectionSort(arr) {
  if (arr.length <= 1) return
  const n = arr.length
  let minIndex
  for (let i = 0; i < n; i++) {
    minIndex = i
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  return arr
}
