function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubbleSort(arr) {
  if (arr.length <= 1) return
  const n = arr.length
  for (let i = 0; i < n; i++) {
    let isBubble = false
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isBubble = true
      }
    }
    if (!isBubble) break
  }
  return arr
}
