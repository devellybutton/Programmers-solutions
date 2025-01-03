// O(n^2) - 시간초과되는 풀이

function solution(numbers) {
  let stack = []; // 다음으로 큰 수를 저장할 스택
  const answer = []; // 결과를 저장할 배열
  
  for (let i = 0; i < numbers.length; i++) {
      stack = []; // 각 숫자마다 스택 초기화
      let j = i+1; // 현재 숫자 다음부터 검사 시작
      
      while (j < numbers.length) {
          if (numbers[i] < numbers[j]) { // 현재 숫자보다 큰 수를 찾으면
              stack.push(numbers[j]) // 스택에 추가
              break; // 찾았으면 즉시 중단
          }
          j++;
      }
      // 스택의 마지막 값(찾은 큰 수)을 결과 배열에 추가
      // 큰 수를 찾지 못했다면 -1 추가
      answer.push(stack[stack.length-1] ? stack[stack.length-1] : -1)
  }
  answer[answer.length-1] = -1; // 마지막 숫자는 항상 -1
  return answer;   
}

/**
 * 시간 복잡도
 * - 전체 : O(n^2)
 * - 외부 n번, 내부 while문에 n번 실행될 수 있어서 복잡도가 올라감.
 */