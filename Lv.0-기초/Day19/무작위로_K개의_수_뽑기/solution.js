// 문제에 따라서 arr은 정렬을 하면 안 됨.

function solution(arr, k) {
  // Set을 활용하여 중복된 원소를 제거한 배열을 생성 
  const uniqueArr = Array.from(new Set(arr));
  const answer = [];
  
  // 앞에서부터 서로 다른 k개의 수를 뽑아야 하므로
  // 인덱스 0부터 (k-1)까지 반복하여 해당 원소를 answer에 추가
  for (let i = 0; i < k; i++) {
      answer.push(uniqueArr[i])
  }
  
  // 만약 원소의 개수가 k보다 작아서 일부 원소가 null인 경우
  // 이럴 때는 null 대신 -1을 반환하도록 함
  return answer.map(el => {
      if (!el && el !== 0) return -1
      else return el;
  });
}

/**
 * 시간 복잡도
 * 
 * - O(n) (중복 제거) + O(k) (반복문) + O(k) (배열 변환) = O(n + k)
 * - 전체 : O(n)
 */