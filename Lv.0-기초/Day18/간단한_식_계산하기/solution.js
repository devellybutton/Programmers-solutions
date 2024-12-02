// switch-case문
// break를 써줘야 독립적으로 처리됨.

function solution(binomial) {
  const [num1, operator, num2] = binomial.split(' ');
  let answer;
  switch (operator) {
      case '+':
          answer = Number(num1) + Number(num2)
          break;
      case '-':
          answer = Number(num1) - Number(num2)
          break;
      case '*':
          answer = Number(num1) * Number(num2)
          break;
  }
  
  return answer;
}

/**
 * 시간 복잡도
 * 
 * - split(' ') : O(n)
 * - switch 문 : O(1) (각 케이스마다 O(1)만큼 걸림)
 * - 전체 : O(n)
 */