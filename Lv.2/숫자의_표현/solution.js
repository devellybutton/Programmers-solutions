function solution(n) {
  let count = 0; 

  // 1부터 n까지 각 시작점을 시도
  for (let i = 1; i <= n; i++) {
      let sum = 0;  // 연속된 자연수들의 합을 저장할 변수
      // i부터 시작하여 합이 n이 될 때까지 계속 더함
      for (let j = i; sum < n; j++) {
          sum += j;  // j를 합에 더함
          // 만약 합이 n과 같다면
          // 표현 방법의 수를 하나 증가시킴
          // 더 이상 더할 필요 없으므로 내부 반복문을 종료
          if (sum === n) {  
              count++;  
              break; 
          }
      }
  }
  return count;  
}

/**
 * 시간 복잡도
 * - 외부 반복문 : O(n)
 * - 내부 반복문 : O(n/i)
 * - 전체 : O(n^2) (최악의 경우)
 */