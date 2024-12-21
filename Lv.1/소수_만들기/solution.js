// 소수인지 판별하는 함수
function isPrime(num){
  if (num <= 1) return false;
  for (let i = 2; i <= Math.pow(num, 0.5); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;
  
  // nums에서 3개씩 조합을 구함.
  for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i+1; j < nums.length - 1; j++) {
          for (let k = j+1; k < nums.length; k++) {
              const sum = nums[i] + nums[j] + nums[k];
              if (isPrime(sum)) count++;
          }
      }
  }

  return count;
}

/**
 * 시간 복잡도
 * - isPrime : sqrt(num)까지 순회 => *O(√n)
 * - solution의 반복문 : O(n^3)
 * - n개의 원소에서 서로 다른 3개 
 * - nC3 = n * (n-1) * (n-2) / 6
 * - 전체 : O(n^3 * √m) (n은 nums 배열, m은 각 조합의 합의 최대값)
 */