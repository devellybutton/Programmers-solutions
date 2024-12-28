function solution(s, skip, index) {
  const skipSet = new Set(skip);  // skip에 포함된 문자들을 빠르게 체크하기 위해 Set 사용
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';  // 알파벳 순서
  let result = '';

  // 알파벳에 대해 skip을 고려한 새로운 배열을 만든다
  let filteredAlphabet = alphabet.split('').filter(char => !skipSet.has(char));

  // 각 문자를 순회하면서 처리
  for (let char of s) {
      let idx = filteredAlphabet.indexOf(char);  // 현재 문자의 인덱스를 찾음
      let newIdx = (idx + index) % filteredAlphabet.length;  // index만큼 뒤로 이동

      // 새로운 문자를 결과 문자열에 추가
      result += filteredAlphabet[newIdx];
  }

  return result;  // 최종 결과 반환
}