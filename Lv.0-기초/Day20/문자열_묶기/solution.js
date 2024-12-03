function solution(strArr) {
  const hash = {};
  
  // 객체에 문자열의 개수가 등장한 빈도를 넣어준다
  for (const str of strArr) {
      const len = str.length;
      hash[len] = (hash[len] || 0) + 1;
  }

  // 빈도(value) 중 최댓값을 리턴한다
  return Math.max(...Object.values(hash))
}

/**
 * 시간 복잡도
 * 
 * - 배열 순회 : O(n)
 * - Object.values(hash) : O(1)
 * - Math.max : O(1)
 * - 전체 : O(n)
 */