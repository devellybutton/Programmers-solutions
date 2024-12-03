function solution(arr) {
  const stk = [];
  
  for (let i = 0; i < arr.length; i++) {
      // stk가 비어있으면 바로 추가, 아니면 마지막 원소와 비교
      // 조건문을 간결하게 줄일 수 있음.
      if (stk.length === 0 || stk[stk.length - 1] !== arr[i]) {
          stk.push(arr[i]);
      } else {
          stk.pop();
      }
  }
  
  // stk가 비어있으면 [-1] 반환, 아니면 stk 반환
  return stk.length === 0 ? [-1] : stk;
}

/**
 * 시간 복잡도
 * 
 * - for문이 arr.length만큼 반복
 * - push와 pop 연산은 O(1)
 * - 전체 : O(n)
 */