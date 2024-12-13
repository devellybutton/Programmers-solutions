function solution(n, m) {
  // 최대 공약수
  const findGCD = (n, m) => {
      for (let i = Math.min(n, m); i >= 1; i--) {
          if (n % i === 0 && m % i === 0) return i;    
      }
  }
  
  // 최소 공배수
  let LCM = Math.max(n, m);
  const findLCM = (n, m) => {
      while(true) {
          if (LCM % n === 0 && LCM % m === 0) return LCM;  
          LCM++;
      }
  }
  
  return [findGCD(n, m), findLCM(n, m)]
}