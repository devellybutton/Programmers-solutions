function solution(s) {
  let arr = s.split('');  // 문자열 s를 배열로 만듦.
  let x = arr[0];  // arr의 첫번째 글자가 x가 됨.
  let countX = 0;  // x를 세는 변수
  let countNotX = 0;  // x가 아닌 수를 세는 변수
  const results = [];  // 정답 배열 
  let pointer = 0; // 분리 지점을 추적하는 변수
  
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== x) {
          countNotX++;   
      } else {
          countX++;
      } 
      
      // countX와 countNotX가 같으면 결과 배열에 추가
      if (countX !== 0 && countX === countNotX) {
          // 분리한 문자열을 results 배열에 넣기 
          // pointer부터 i까지 넣음.
          const str = arr.slice(pointer, i+1).join('');
          results.push(str);
          pointer = i+1; // 분리된 문자열 이후를 포인터로 지정 
          countX = countNotX = 0;  // 카운트 리셋 
          
          if (pointer < arr.length) {
              x = arr[pointer]; 
          }
      };
  }
  
  // 남은 부분이 있으면 마지막으로 분리해서 결과 추가
  if (pointer < arr.length) {
      results.push(arr.slice(pointer).join(''));
  }
  return results.length;
}

/**
 * 시간 복잡도
 * - 문자열 배열로 변환 : O(n)
 * - 문자열 순회하면서 분리 : O(n)
 * - 배열 슬라이싱, 결과 저장 : O(n)
 * - 전체 : O(n)
 */