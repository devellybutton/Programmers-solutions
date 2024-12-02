function solution(rny_string) {
  return rny_string.split('').map(el => {
      if (el === "m") el = "rn"
      return el
  }).join("")
}

/**
 * 시간 복잡도
 * 
 * - split('') : 문자열 → 배열, O(n)
 * - map() : O(n)
 * - join('') : O(n)
 * - 전체 : O(n)
 */