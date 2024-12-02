function solution(myString) {
  return myString
      .split('x')
      .filter(el => /[a-zA-Z]/g.test(el))
      .sort((a, b) => a.localeCompare(b))
}

/**
 * 시간 복잡도
 * 
 * - split('x') : O(n)
 * - filter : O(m * k) (최악 O(n))
 * - sort : O(m log m) (최악 O(n log n))
 * - 전체 :  O(n log n)
 */