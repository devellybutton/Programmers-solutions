// 만약 shift랑 unshift 연산이라면?
// 각 메서드는 O(n)의 복잡도를 가짐.

function solution(arr) {
  const stk = [];
  
  for (let i = 0; i < arr.length; i++) {
      // stk가 비어있으면 unshift로 추가, 아니면 마지막 원소와 비교
      if (stk.length === 0 || stk[0] !== arr[i]) {
          stk.unshift(arr[i]);  // 앞에 추가
      } else {
          stk.shift();  // 앞에서 제거
      }
  }
  
  return stk.length === 0 ? [-1] : stk;
}

/**
 * 시간 복잡도
 * 
 * - for문이 arr.length만큼 반복
 * - shift와 unshift 연산은 O(n)
 * - 전체 : O(n^2)
 */