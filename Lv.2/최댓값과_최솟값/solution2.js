// sort로 푸는 풀이

function solution(s) {
  const arr = s.split(' ').map(Number); 
  const sortedArr = arr.sort((a, b) => b - a);
  return [Math.min(...sortedArr), Math.max(...sortedArr)].join(' ');
}

/**
 * 시간 복잡도
 * 
 * - 배열 분리 변환 : O(n)
 * - 정렬 : O(n log n)
 * - 최소값, 최대값 : O(n)
 * - 결합 : O(n)
 * - 전체 : O(n log n)
 */