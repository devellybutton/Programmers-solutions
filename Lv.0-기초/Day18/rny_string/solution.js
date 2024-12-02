function solution(rny_string) {
  return rny_string.replace(/m/g, "rn")
}

// 문자열의 모든 m을 "rn"으로 변경
// replace는 원본 문자열을 수정하므로 split() + map() + join()이 중간배열을 사용하는 것보다 더 공간 복잡도 측면에서 효율적임.

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n)
 */