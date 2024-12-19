// 문제의 핵심
// 0. 3진법으로 변환 => 3으로 계속 나눠서 나머지 순차적으로 쓴다
// 1. 나머지를 배열에 넣어줄 때 일의자리부터 계산하므로 굳이 뒤집을 필요 없음.
// 2. 10진법으로 변환할 때 3의 거듭제곱은 이런식으로 i가 증가하는 것과 반대 방향으로 진행됨. (i => arr.length - 1 - i)

// 10진법을 3진법의 수로 변환
function decimalToTernary(n) {
  let result = [];
  while (n >= 1) {
      let remainer = (n % 3)  
      n = Math.floor(n / 3)
      result.push(remainer)
  }
  return result.join('');
}

// 3진법을 10진법 수로 변환환
function ternaryToDecimal(n) {
  const arr = n.split('').map(Number);
  console.log(arr)
  let result = 0;
  for (let i = 0; i < arr.length; i++){
      result += (arr[i] * Math.pow(3, arr.length - 1 - i))
  }
  return result;
}

function solution(n) {
  let ternary = decimalToTernary(n);
  return ternaryToDecimal(ternary);
}