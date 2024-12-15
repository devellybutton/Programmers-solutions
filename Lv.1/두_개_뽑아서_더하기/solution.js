function solution(numbers) {
  const answer = new Set();
  
  // i는 첫 번째 원소, j는 i+1 부터 시작하여 중복 계산 방지
  for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          const sum = numbers[i] + numbers[j];
          answer.add(sum);
      }
  }
  
  // Set을 배열로 변환하고 오름차순으로 정렬하여 반환
  return [...answer].sort((a, b) => a - b);
}

/**
 * 시간 복잡도 
 * 
 * - 이중 루프 : O(n^2)
 * - Set에 값 넣기 : O(1)
 * - Set을 배열로 변환하고 졍렬 : O(n log n)
 * - 전체 : O(n²)
 */