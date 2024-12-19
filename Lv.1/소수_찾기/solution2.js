// 만약 소수의 개수가 아닌 소수인 숫자를 반환하라고 한다면
// 1) map으로 소수가 아닌 수의 값을 -1, 소수인 수는 해당 수(인덱스)로 변환
// 2) filter로 -1이 아닌 수만 제외하고 반환

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
  
  return primeNumber
        .map((isPrime, idx) => isPrime ? idx : -1)
        .filter(idx => idx !== -1);
}