// 에라토스테네스의 체
// 소수를 판별하는 배열을 모두 true로 만들어서
// 소수의 배수는 모두 false로 만들어서 거른다

function solution(n) {
  // 소수인지 여부가 boolean 값으로 담겨있는 배열
  // 인덱스 = 숫자 (0부터 n까지를 담아야 하므로 총 n + 1개임)
  const primeNumber = new Array(n + 1).fill(true);
  
  // 0과 1은 소수가 아니므로 false
  primeNumber[0] = primeNumber[1] = false;
  
  // 2부터 n의 제곱근까지 순회
  for (let i = 2; i * i <= n; i++) {
      // 해당 수가 소수인 경우
      // 그 수의 배수는 소수가 아니다 (false)
      if (primeNumber[i]) {
          for (let j = i * i; j <= n; j += i) {
              primeNumber[j] = false;
          }
      }
  }
  
  return primeNumber.filter(Boolean).length;
}

/**
 * 시간 복잡도
 * 
 * - 배열 초기화 : O(n)
 * - 에라토스테네스의 체 알고리즘 : O(n * log log n)
 * - 필터링 : O(n)
 * - 전체 : O(n * log log n)
 */