function solution(arr1, arr2) {
  const len1 = arr1.length;
  const len2 = arr2.length;

  // 배열 길이가 다르면, 더 긴 배열이 더 크다고 판단
  if (len1 !== len2) {
      return len1 > len2 ? 1 : -1;
  }

  // 배열 길이가 같을 경우, 원소의 합을 비교
  const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
  const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

  // 원소 합이 같으면 0, 아니면 더 큰 배열을 반환
  if (sum1 === sum2) {
      return 0;
  }
  return sum1 > sum2 ? 1 : -1;
}

/**
 * 시간 복잡도
 * 
 * - O(n)
 */