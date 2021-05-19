function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let current = arr.splice(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}

function quickSort(arr) {
  if (arr.length <= 1) return arr
  sort(arr, 0, arr.length - 1)
  function sort(arr, left, right) {
    if (arr.length <= 1) return
    let index = partition(arr, left, right)
    if (left < index - 1) {
      sort(arr, left, index - 1)
    }
    if (index < right) {
      sort(arr, index, right)
    }
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = left + ((right - left) >>> 1)
  const value = arr[pivot]
  while (left <= right) {
    while (arr[left] < value) left++
    while (arr[right] > value) right--
    if (left <= right) {
      swap(arr, left, right)
      left++
      right--
    }
  }
  return left
}
