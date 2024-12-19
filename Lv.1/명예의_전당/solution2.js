// solution2.js에서 불필요한 부분 제거

function solution(k, score) {
  const answer = []; // 하위 3등 점수
  const topScores = []; // 명예의 전당 점수

  for (let i = 0; i < score.length; i++) {
    topScores.push(score[i]);
    topScores.sort((a, b) => b - a);

    // 만약 배열의 크기가 k를 초과하면, 가장 작은 값을 제거
    if (topScores.length > k) {
      topScores.pop();
    }

    // 명예의 전당에서 최하위 점수를 answer에 추가
    answer.push(topScores[topScores.length - 1]);
  }

  return answer;
}

/**
 *
 * - 반복문 : O(n)
 * - 정렬 : O(k log k)
 * - pop()으로 제거 : O(1)
 * - push()로 추가 : O(1)
 * - 전체 : O(n * k log k)
 */
