// split과 filter를 사용

function solution(myStr) {
  const answer = myStr
      .replaceAll(/[abc]/gi, " ")
      .split(" ")  // 공백 기준으로 분리 (공백이 사라짐)
      .filter(el => el)  // 빈문자열이 제거됨
  return answer.length === 0 ?  ["EMPTY"] : answer;
}

/*
filter(el => el)로 빈문자열이 사라지는 이유 
=> filter 함수는 각 요소를 평가하여 falsy 값만 제거함
(undefined, 0, NaN, false, "")를 제거함.
*/

/**
 * 시간 복잡도
 * 
 * - replaceAll(/[abc]/gi, " ") : O(n), 검사 및 교체
 * - split(" ") : O(n)
 * - filter(el => el) : O(m) (배열의 크기 m, 최악은 n)
 * - 전체 :  O(n)
 */