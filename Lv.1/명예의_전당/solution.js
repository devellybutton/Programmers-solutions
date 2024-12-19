function solution(k, score) {
  const answer = [];
  const top3Arr = []; // 3개만 저장하는 배열
  
  // top3Arr의 크기가 k보다 작은 경우
  // 원소 중 가장 작은 값을 반환한다
  for (let i = 0; i < score.length; i++) {
      // i가 k미만인 경우 가장 작은 값을 반환 
      if (i < k) {
          top3Arr.push(score[i]);
          answer.push(Math.min(...top3Arr));
      } else {
              // top3Arr에서 가장 작은 점수가 빠지고
              // score[i]가 top3Arr에 들어감.
              // top3Arr을 내림차순 정렬 후 인덱스 2(3등)인 것을 answer에 넣기
              top3Arr.push(score[i]);
              top3Arr.sort((a, b) => b - a);
              const _top3Arr = top3Arr.slice(0, k);
              answer.push(_top3Arr[k-1]);
      }
  }
  return answer;
}

/**
 * 시간 복잡도
 * 
 * - for 문 : O(n)
 * - Math.min(...top3Arr) : O(k)
 * - top3Arr.push(score[i]) : O(1)
 * - top3Arr.sort((a, b) => b - a) :  O(k log k)
 * - 전체 : O(n * k log k)
 */