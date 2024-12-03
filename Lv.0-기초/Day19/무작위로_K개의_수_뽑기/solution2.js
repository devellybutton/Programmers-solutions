function solution(arr, k) {
  const uniqueArr = [];
  const seen = new Set();

  // arr을 순차적으로 순회하여 고유값을 uniqueArr에 추가
  for (let num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      uniqueArr.push(num);
    }

    // uniqueArr의 길이가 k가 되면 반복 종료
    if (uniqueArr.length === k) break;
  }

  // 고유값이 부족하면 -1로 채워서 반환
  // 길이가 k이면 반복 종료
  while (uniqueArr.length < k) {
    uniqueArr.push(-1);
  }

  return uniqueArr;
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n + k) 
 */