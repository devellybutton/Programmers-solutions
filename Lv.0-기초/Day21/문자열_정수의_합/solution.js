function solution(num_str) {
  let sum = 0;
  for (let i = 0; i < num_str.length; i++) {
      sum += Number(num_str[i]);
  }
  return sum;
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n)
 */