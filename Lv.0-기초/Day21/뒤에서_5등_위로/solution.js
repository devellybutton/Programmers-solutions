function solution(num_list) {
  // 정렬 후, 첫 5개를 제외한 나머지를 리턴
  return num_list.sort((a, b) => a - b).slice(5);
}

/**
 * 시간 복잡도
 * 
 * - sort() : O(n log n)
 * - slice() : O(n)
 * - 전체 : O(n log n)
 */