function solution(d, budget) {
  // d 배열 원소의 합이 budget보다 작거나 같으면 => 모두 지원
  const sumOfd = d.reduce((acc, cur) => cur + acc, 0) 
  if (sumOfd <= budget) return d.length;
  
  // 오름차순 정렬
  const sortedD = d.sort((a, b) => a - b);
  let maxCount = -100;
  
  // 슬라이딩 윈도우
  let sum = 0;
  let i = 0;
  
  for (let j = 0; j < sortedD.length; j++) {
      // sum에 현재 j 값 추가
      sum += sortedD[j];

      // sum이 budget을 넘는 경우, 슬라이딩 윈도우처럼 i를 증가시키며 sum을 줄임
      while(sum > budget){
          sum = sum - sortedD[i];
          i++;
      }
      
      // while문을 실행하는 이유는 sum이 budget보다 클 경우 조건 자체가 성립하지 않으므로 합을 줄여서 조건에 부합하도록 하기 위함임.
      // i부터 j까지 갯수를 계산 (부서의 개수)하며 maxCount와 비교
      // 둘 중 더 큰 값이 maxCount로 업데이트 됨.
      maxCount = Math.max(maxCount, j - i + 1);
  }
  
  return maxCount;
}

/**
 * 시간 복잡도
 * 
 * - reduce로 합계 계산 : O(n) (배열을 한번 순회)
 * - 오름차순 정렬 : O(n log n)
 * - 슬라이딩 윈도우: O(n)
 * - 전체 : O(n log n)
 */