// O(n) - 통과되는 풀이

function solution(numbers) {
  const stack = []; // 인덱스를 모아놓을 스택
  const answer = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    // 스택의 top 값이 현재 numbers의 값보다 작을 경우
    // answer 배열에 현재 값을 넣어줌
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}
