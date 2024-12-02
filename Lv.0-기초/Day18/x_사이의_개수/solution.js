function solution(myString) {
  return myString.split('x').map(el => { return el.length })
}

/**
 * 시간 복잡도
 * 
 * - split('x') : O(n) 
 * - map(el => el.length) : O(m) 
 * (m은 배열 내 부분 문자열의 개수, 최대 O(n))
 * - 전체 : O(n)
 */