function solution(arr, n) {
  let N = arr.length;
  
  // 반복문 초기값에 삼항 연산자
  for (let i = (N % 2 === 1 ? 0 : 1); i < N; i += 2) {
      arr[i] += n;
  }
  
  return arr;
}

/**
 * 시간복잡도
 * 
 * - 전체 : O(N)
 */