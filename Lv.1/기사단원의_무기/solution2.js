function solution(number, limit, power) {
  // 약수 개수를 저장할 배열
  const divisors = Array(number + 1).fill(0);
  
  // 1부터 number까지 약수의 개수를 구함
  for (let i = 1; i <= number; i++) {
      for (let j = i; j <= number; j += i) {
          divisors[j]++;  // i는 j의 약수이므로 divisors[j]에 1을 더함
      }
  }
  
  // 각 기사에 대해 공격력 계산
  let totalPower = 0;
  for (let i = 1; i <= number; i++) {
      let attackPower = divisors[i] > limit ? power : divisors[i];
      totalPower += attackPower;
  }
  
  return totalPower;
}