function solution(s) {
  let x = s[0];  // 첫 번째 문자로 x를 설정
  let countX = 0; // x의 개수
  let countNotX = 0; // x가 아닌 문자의 개수
  let resultCount = 0; // 분리된 문자열의 개수
  let pointer = 0; // 현재 문자가 끝났을 때 포인터

  // 문자열을 한 번 순회하면서 분리하기
  for (let i = 0; i < s.length; i++) {
      if (s[i] === x) {
          countX++;
      } else {
          countNotX++;
      }

      // countX와 countNotX가 같으면 문자열 분리
      if (countX === countNotX) {
          resultCount++;
          countX = 0; // 카운트 리셋
          countNotX = 0; // 카운트 리셋
          
          // 다음 분리를 위해 x를 갱신 (다음 문자가 새로운 x로 시작)
          if (i + 1 < s.length) {
              x = s[i + 1];
          }
      }
  }
  
  // 남은 부분이 있다면 마지막으로 추가
  if (countX !== 0 || countNotX !== 0) {
    resultCount++;
  }

  return resultCount;
}