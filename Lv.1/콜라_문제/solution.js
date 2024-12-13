function solution(a, b, n) {
  let count = 0; // 증정 받는 콜라의 수

  // 전체 콜라의 개수 n이 a과 같거나 클 때까지 반복
  while (n >= a) {
    let newCokes = Math.trunc(n / a) * b; // 새로 받는 콜라의 개수
    let remainCokes = n % a; // n을 a로 나눈 몫

    count += newCokes; // 반복할 때마다 증정 받는 콜라의 수 업데이트
    n = remainCokes + newCokes; // 새로 받는 콜라 + 기존 구매한 콜라
  }

  return count;
}
