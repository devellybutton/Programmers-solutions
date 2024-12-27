// 시간 초과되는 풀이

function solution(ingredient) {
  const hamburger = [];  // 햄버거를 만들기 위한 스택 배열
  let count = 0;  // 완성된 햄버거의 수를 세기 위한 변수

  // ingredient 배열을 처음부터 끝까지 탐색
  for (let i = 0; i < ingredient.length;) {
      // 현재 위치부터 1-2-3-1 패턴이 있는지 확인
      // 패턴이 맞으면 햄버거 하나가 완성되었으므로 카운트 증가
      // 해당 패턴을 배열에서 삭제
      // 배열을 처음부터 다시 탐색하도록 i를 0으로 초기화
      if (ingredient.length >= 4 && ingredient[i] === 1 && ingredient[i+1] === 2 && ingredient[i+2] === 3 && ingredient[i+3] === 1) {
          count++;  
          ingredient.splice(i, 4); 
          i = 0;  
      } else {
          i++; 
      }
  }
  return count;  
}

/**
 * 시간 복잡도
 * - for문 : O(n)
 * - splice() : O(n) (배열이 삭제될 때마다 i = 0으로 처음부터 다시 탐색)
 * - 전체 : O(n^2)
 */