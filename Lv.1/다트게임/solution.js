function solution(dartResult) {
  // 1. dartResult를 문자 단위로 쪼개고, 숫자 문자열은 숫자로 변환
  const dartResultArr = dartResult
                          .split('')
                          .map(el => !isNaN(el) ? parseInt(el) : el)
  let score = [];  // 최종 점수들을 저장할 배열
  
  // 2. dartResultArr 배열을 순회하면서 점수 계산
  for (let i = 0; i < dartResultArr.length; i++) {
      if (dartResult[i] === "S") {
          // 이전 두 값이 0과 1인 경우 10의 1제곱을 점수로 추가
          if (dartResultArr[i-1] === 0 && dartResultArr[i-2] === 1) {
              score.push(Math.pow(10, 1))
            // 그 외의 경우는 그냥 직전 숫자 넣기기
          } else {
              score.push(Math.pow(dartResult[i-1], 1))
          }
      }
      if (dartResultArr[i] === "D") {
          if (dartResultArr[i-1] === 0 && dartResultArr[i-2] === 1) {
              score.push(Math.pow(10, 2))
          }
          else score.push(Math.pow(dartResultArr[i-1], 2));
      }
      if (dartResultArr[i] === "T") {
          if (dartResultArr[i-1] === 0 && dartResultArr[i-2] === 1) {
              score.push(Math.pow(10, 3))
          }
          else score.push(Math.pow(dartResultArr[i-1], 3));
      }
      // #이 나오면 마지막 점수를 음수로 변환
      if (dartResultArr[i] === "#") {
          score[score.length-1] = -score[score.length-1];
      }
      // *이 나오면 직전 점수와 그 직전 점수만 2배로 변환 
      if (dartResultArr[i] === "*") {
          score[score.length-1] = score[score.length-1] * 2;
          score[score.length-2] = score[score.length-2] * 2;
      }   
  }
  // 최종 점수를 모두 더해서 반환
  return score.reduce((acc, cur) => +cur + acc, 0);
}

/**
 * 시간 복잡도
 * - split('') : O(n)
 * - map : O(n)
 * - for 반복문 : O(n)
 * - reduce : O(n)
 * - 전체 : O(n)
 */