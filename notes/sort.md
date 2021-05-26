# 排序

## swap

```js
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
```

## 插入排序

```js
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
```

## 冒泡排序

```js
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
```

## 选择排序

```js
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
```

## 快速排序

### 递归 + concat

```js
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
```

### 使用辅助函数 partition

```js
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
```
