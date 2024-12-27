// 스택을 활용한 풀이

function solution(ingredient) {
  const hamburger = [];  // 햄버거를 만들기 위한 스택 배열
  let count = 0;  // 완성된 햄버거의 수를 세기 위한 변수

  // ingredient 배열을 처음부터 끝까지 탐색
  for (let i = 0; i < ingredient.length; i++) {
      hamburger.push(ingredient[i]); 

      // 스택에서 마지막 4개의 요소가 [1, 2, 3, 1] 패턴인지 확인
      // 맞으면 count를 1증가시키고,
      // 스택에서 마지막 4개 요소 제거
      if (hamburger.length >= 4 && 
          hamburger[hamburger.length - 4] === 1 &&  
          hamburger[hamburger.length - 3] === 2 &&  
          hamburger[hamburger.length - 2] === 3 &&  
          hamburger[hamburger.length - 1] === 1) {  
          count++; 
          hamburger.splice(-4);  
      }
  }
  
  return count; 
}

/**
 * 시간 복잡도
 * - for문 : O(n)
 * - 연산 : O(4)
 * - 전체 : O(n)
 */