function countNumber1(num) {
  return num.toString(2).split('').filter(el => el === "1").length;
}

function convertBinary(num) {
  if (num === 0) return "0";
  
  let result = "";
  while (num > 0) {
      result = (num % 2).toString() + result; 
      num = Math.floor(num / 2);
  }
  return result;
}

function solution(n) {
  // n의 1의 개수를 카운트한다.
  // n부터 반복문으로 숫자를 1개씩 올리면서 이진수로 변환한다
  // 변환한 이진수의 1의 개수를 카운트한다.
  // 그걸 n의 개수와 비교해서 같으면 그게 'n의 다음 큰 숫자'임.
  const nCount = countNumber1(n);
  let nextBigNumber = 0; 
  
  for (let i = n+1; i <= 1000000; i++) {
      const binary = convertBinary(i);
      const numbers = countNumber1(binary);

      if (numbers === nCount) {
          nextBigNumber = i;
          break;
      } 
  }
  return nextBigNumber;
}

/**
 * 시간 복잡도
 * - num.toString(2) : O(log n)
 * - 반복문 반복 횟수 : 100000 - (n + 1)
 * ----> log n * n
 * - 전체 : O(n log n)
 */