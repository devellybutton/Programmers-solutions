// 에라토스테네스의 체로 1부터 3000까지 소수 구하기
// 이게 더 효율적인 이유는 소수 판별할 때 O(1)상수시간이 걸리기 때문임.

function sieveOfEratosthenes(limit) {
  const sieve = Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;  // 0과 1은 소수가 아님
  for (let i = 2; i * i <= limit; i++) {
      if (sieve[i]) {
          for (let j = i * i; j <= limit; j += i) {
              sieve[j] = false;
          }
      }
  }
  return sieve;
}

function solution(nums) {
  const sieve = sieveOfEratosthenes(3000);  // 1000 + 1000 + 1000 (최대 합)
  let count = 0;

  // nums에서 3개씩 조합을 구함.
  for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              const sum = nums[i] + nums[j] + nums[k];
              if (sieve[sum]) count++;
          }
      }
  }

  return count;
}

/**
 * 시간 복잡도
 * - 에라토스테네스의 체 : O(n log log n)
 * - 반복문 : O(n^3)
 * - 전체 : O(n^3 + n log log n)
 * => O(n^3)
 */
