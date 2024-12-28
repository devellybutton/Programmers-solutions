// 배열 활용 

function solution(X, Y) {
  const xArr = X.split('');
  const yArr = Y.split('');
  
  // 숫자의 등장 횟수를 셈
  const countX = Array(10).fill(0);  // 0부터 9까지의 숫자 카운트
  const countY = Array(10).fill(0);  // 0부터 9까지의 숫자 카운트

  // X와 Y에서 등장한 숫자들을 각각 카운팅
  for (let num of xArr) countX[parseInt(num)]++;
  for (let num of yArr) countY[parseInt(num)]++;

  let answer = '';
  
  // 0부터 9까지 숫자들에 대해, 공통된 숫자를 찾아 결과에 추가
  for (let i = 9; i >= 0; i--) {
      const count = Math.min(countX[i], countY[i]);
      answer += i.toString().repeat(count);
  }
  
  // 짝꿍이 없거나 전부 0인 경우 처리
  if (answer === '') return "-1";
  if (parseInt(answer) === 0) return "0";
  
  return answer;
}