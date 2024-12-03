// Array.fill, splice 사용

function solution(arr, flag) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (flag[i]) {
          // arr[i] * 2만큼 길이의 배열을 생성
          // 모든 원소는 arr[i]로 채움
          result.push(...Array(arr[i] * 2).fill(arr[i]))   
      } else {
          // result에서 마지막 arr[i]개 원소 제거
          // splice는 원본 배열을 수정하므로 바로 사용
          result.splice(result.length - arr[i], arr[i])
      }
  }
  return result;
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n)
 * - arr[i]가 최대 9로 고정됨. 상수시간.
 */