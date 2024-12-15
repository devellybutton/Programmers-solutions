// 문자를 하나씩 앞에서부터 확인하고, 그 전에 나온 문자들과 비교
// 최적화가 필요함.

function solution(s) {
  const answer = [];
  const arr = s.split("");

  let i = 0; // 비교 기준이 되는 글자의 인덱스
  for (let i = 0; i < arr.length; i++) {
    // 문자열을 순차적으로 비교
    let min = -1;
    for (let j = 0; j < i; j++) {
      // 이전에 나왔던 문자들 중에서
      if (j < i && arr[j] === arr[i]) {
        // 같은 문자가 있으면
        min = i - j; // 가장 가까운 문자 거리 계산
      }
    }
    answer.push(min); // 결과 배열에 기록
  }

  return answer;
}

/**
 * 시간 복잡도
 * 
 * - 이중 for문 : 첫 번째 n번, 두 번째 n-1번 => O(n^2)
 * - 전체 : O(n^2)
 */