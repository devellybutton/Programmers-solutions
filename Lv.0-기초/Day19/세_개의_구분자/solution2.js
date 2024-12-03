// split과 reduce를 사용
// 시간복잡도는 더 안 좋음.

function solution(myStr) {
  const answer = myStr
      .replaceAll(/[abc]/gi, " ")
      .split(" ")  // 공백 기준으로 분리 (공백이 사라짐)
      .reduce((acc, cur) => cur ? [...acc, cur] : acc, []); // 빈 문자열 제거
  return answer.length === 0 ?  ["EMPTY"] : answer;
}

/*
콜백함수에서 
cur ? [...acc, cur] : acc, []

cur가 truthy일 때 : 누적 배열에 cur추가
falsy일 때 : acc 그대로

*/
/**
 * 시간 복잡도
 * 
 * - replaceAll(/[abc]/gi, " ") : O(n), 검사 및 교체
 * - split(" ") : O(n)
 * - reduce : O(n^2)
 * (최악으로 모든 요소가 truthy일 경우 배열의 길이 n이므로
 * O(1 + 2 + 3 + ... + n) 만큼 배열을 복사함)
 * - return 문 : O(1)
 * - 전체 : O(n^2)
 */