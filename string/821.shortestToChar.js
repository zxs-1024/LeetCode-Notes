// 821. 字符的最短距离
// https://leetcode-cn.com/problems/shortest-distance-to-a-character/

/**
 * 空间换时间
 * 时间复杂度：O(m*n) m 为 s 长度
 * 空间复杂度：O(n) n 为 c 出现次数
 */
var shortestToChar = function (s, c) {
  const res = new Array(s.length).fill(Infinity)

  // 记录 c 下标集合
  const indexCache = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indexCache.push(i)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      res[i] = 0
      continue
    }
    for (const n of indexCache) {
      const dis = Math.abs(n - i)
      if (dis >= res[i]) break
      res[i] = dis
    }
  }

  return res
}

const s = 'loveleetcode', c = 'e'
console.log('shortestToChar(s, c): ', shortestToChar(s, c));
