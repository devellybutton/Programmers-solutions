function solution(arr) {
  const answer = [];
  let pointer = 0;
  
  while(pointer < arr.length) {  // arr의 길이(n)
     for (let i = 0; i < arr[pointer]; i++) { // pointer의 값만큼 반복
          answer.push(arr[pointer])
     }
     pointer++;
  }
  
  return answer;
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n * m) (n은 배열의 길이, m은 각 배열 요소의 값)
 */