function solution(s) {
  // 문자열을 배열로 변환
  // 이렇게 해주는 이유는 0x16 같은 문자열이 있기 때문임
  const arr = s.split('');
  
  // 배열의 길이가 4가 아니고, 6이 아니면 false
  if (s.length !== 4 && s.length !== 6) return false;
  
  // 배열을 순회하며 해당 글자가 정수로 변환하였을 때 NaN인 경우 
  // 숫자가 아니므로 false 반환
  for (const letter of s) {
      if (isNaN(Number(letter))) return false;
  }
  
  // 모든 걸 통과하면 true
  return true;
}