function solution(arr) {
  // arr의 길이 구하고 그것보다 큰 것 중에 가장 작은 2의 거듭제곱을 구해서 그 차이만큼 0을 추가
  // 로그 씌웠을 때 그것보다 더 큰 자연수가 가장 가까운 2의 거듭제곱임.
  const N = arr.length; // 배열의 길이
  const M = Math.pow(2, Math.ceil(Math.log2(N))); // 2의 거듭제곱
  const count = M - N; // 필요한 0의 개수

  // 배열 끝에 필요한 개수만큼 0을 추가
  arr.push(...Array(count).fill(0));
  
  return arr;
}

/**
 * 시간 복잡도
 * 
 * - Math.log2(N), Math.ceil(), Math.pow() : O(1)
 * - arr.push(...Array(count).fill(0)) : O(count)
 * - 전체 : O(n)
 */