function solution(num_str) {
  return num_str.split('').reduce((acc, cur) => acc + Number(cur), 0);
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n)
 */