function solution(n) {
  let count = 0;

  // k는 연속된 자연수의 개수, 1부터 시작
  for (let k = 1; k * (k + 1) / 2 <= n; k++) {
      // 연속된 자연수들의 합이 n이 되려면, a는 자연수여야 함
      if ((n - k * (k - 1) / 2) % k === 0) {
          count++;
      }
  }

  return count;
}

/**
 * 시간 복잡도
 * - 전체 : O(√n)
 */