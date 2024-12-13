// 유클리드 알고리즘을 활용하여 최적화

function solution(n, m) {
  // 최대 공약수 (GCD) 계산
  const findGCD = (n,m) => {
    let a = Math.max(n, m); // 큰 수
    let b = Math.min(n, m); // 작은 수
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 최소 공배수 (LCM) 계산
  const findLCM = (n, m) => {
    const gcd = findGCD(n, m);
    return (n * m) / gcd;
  }

  return [findGCD(n, m), findLCM(n, m)];
}