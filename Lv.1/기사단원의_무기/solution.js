function countOfDivisors(num){
  if (num === 1) return 1;
  let count = 2; // 1과 자기 자신은 무조건 약수이므로 2부터 시작
  // 2부터 num의 제곱근까지 반복
  // 만약 36의 경우 2가 나누어 떨어지면, 18도 약수가 되므로 카운트를 1개씩 더 증가시킴
  // 6일 경우에는 i=6, num/i=6이므로 카운트가 1개만 증가함.
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          count++;
          if (i !== num/i) count++;
      }
  }
  return count;
}

function getSumOfArray(arr) {
  return arr.reduce((acc, cur) => cur + acc, 0);
}

function solution(number, limit, power) {
  const arr1 = Array.from({ length: number }, (_, index) => index+1);
  const arr2 = arr1.map(el => countOfDivisors(el));
  const arr3 = arr2.map(el => el > limit ? power : el);
  return getSumOfArray(arr3);
}

/**
 * arr1 생성: O(number)
 * arr2 생성 (약수 개수 계산): O(number * √number)
 * arr3 생성: O(number)
 * 배열 합 구하기: O(number)
 * 전체 : O(number * √number)
 */