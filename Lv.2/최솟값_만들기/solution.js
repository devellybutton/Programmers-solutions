function solution(A,B){
  // A는 오름차순, B는 내림차순 정렬
  // 대응되는 값을 곱하면 각 곱셈의 결과가 최소화되며, 그 값들의 누적하면 됨.
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  
  let sum = 0;
  
  for (let i = 0; i < sortedA.length; i++) {
      sum += (sortedA[i] * sortedB[i]);
  }

  return sum;
}

/***
 * - 배열 A와 B의 정렬 : O(N log N)
 * - 반복문 : O(N)
 * - 전체 : O(N log N)
 */

// 힙을 쓰면 시간초과가 됨.