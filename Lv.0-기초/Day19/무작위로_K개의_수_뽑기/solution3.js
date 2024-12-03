// 만약 arr을 정렬해도 된다고 가정해서 푼 풀이임.
// 이렇게 풀면 답이 안 나옴.

function solution(arr, k) {
  // 투 포인터 방법 활용
  // arr이 정렬되어 있다고 문제에 안 나와서 정렬을 해줌.
  const sortedArr = arr.sort((a, b) => a - b);
  
  // 고유한 원소만 있는 배열 만들기
  let i = 0; 
  let uniqueArr = [];
  
  while (i < sortedArr.length) {
      // 첫 번째 원소이거나, 이전 원소와 다르면 고유값 배열에 넣어줌.
      if (i === 0 || sortedArr[i] !== sortedArr[i - 1]) {
          uniqueArr.push(sortedArr[i]);
      }
      i++;
  }
  
  // 길이가 k인 answer 배열을 생성
  // uniqueArr의 원소를 순회하면서 answer 배열에 원소를 추가함.
  // 만약 uniqueArr의 길이가 k보다 짧은 경우 -1을 추가함.
  const answer = [];
  for (let i = 0; i < k; i++) {
      if (uniqueArr[i] === undefined || uniqueArr[i] === null) answer.push(-1);
      else answer.push(uniqueArr[i])
  }

   return answer;
}