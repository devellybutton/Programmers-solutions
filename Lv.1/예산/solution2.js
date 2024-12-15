// 이전 solution의 리팩토링

function solution(d, budget) {
  d.sort((a, b) = a - b);

  let sum = 0;
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i]; // 현재 부서의 금액을 합산

    // 예산을 초과하면 더 이상 지원할 수 없으므로
    if (sum > budget) {
      break;
    }

    // 예산을 초과하지 않으면 부서 수 증가
    count++;
  }

  return count;
}

/**
 * 시간 복잡도
 * 
 * - 오름차순 정렬: O(n log n)
 * - 예산 초과 여부 체크: O(n) (한 번의 순회)
 * - 전체 : O(n log n)
 */