// sort없이 비교

function solution(s) {
  const arr = s.split(' ').map(Number);
  let max = arr[0];
  let min = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i];
      if (arr[i] < min) min = arr[i];
  }
  
  return `${min} ${max}`;
}

/**
 * 시간 복잡도
 * - 문자열 공백 기준으로 분리하고 숫자 변환 : O(n)
 * - 배열 순회하면서 최소값, 최대값 찾음 : O(n)
 * - 전체 : O(n)
 */