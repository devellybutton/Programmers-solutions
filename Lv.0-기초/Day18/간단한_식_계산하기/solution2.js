// if문

function solution(binomial) {
  const [num1, operator, num2] = binomial.split(' ');
  num1 = Number(num1); 
  num2 = Number(num2);  

  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
  if (operator === '*') return num1 * num2;
}

/**
 * 시간 복잡도
 * 
 * - split(' '): O(n)
 * - Number() 변환: O(1) (두 번 호출)
 * - 조건문: O(1) (세 번 호출)
 */