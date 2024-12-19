function solution(n, arr1, arr2) {
  // 10진수를 2진수로 만드는 함수
  // 입력 : 10진수 숫자, 출력 : 2진수 배열
  function decimalToBinary(number) {
      const arr = [];
      while(number > 0) {
          arr.push(number % 2)
          number = Math.trunc(number / 2)
      }
      if (arr.length < n) {
          let count = n - arr.length;
          while (count > 0) {
              arr.push(0);
              count--;
          }
      }
      return arr.reverse();
  }
  
  // [1, 0, 1, 0, 0]
  // 2진수를 문자열 암호로 변환하는 함수
  // 입력 : 이진수 배열, 출력 : 샵이 들어간 문자열
  function binaryToString(arr) {
      const result = [];
      for (const number of arr) {
          if (number === 1) result.push("#");
          else result.push(" ");
      }
      return result.join("");
  }

  // 이진수 문자열을 담을 배열
  // (십진수 => 이진수 => 문자열)
  const binaryArr1 = [];
  const binaryArr2 = [];
  
  // arr1의 각 수를 이진수로 변환
  for (let i = 0; i < arr1.length; i++) {
      const binary = decimalToBinary(arr1[i]);
      const string = binaryToString(binary);
      binaryArr1.push(string);
  }
  
  // arr2의 각 수를 이진수로 변환
  for (let i = 0; i < arr2.length; i++) {
      const binary = decimalToBinary(arr2[i]);
      const string = binaryToString(binary);
      binaryArr2.push(string);
  }
  
  // 최종적으로 두 배열의 계산 결과를 담을 배열
  let answer = [];
  
  // arr1과 arr2에서 #이 있는 부분은 #으로 다 채워서 덧셈
  for (let i = 0; i < binaryArr1.length; i++) {
      let str = "";
      for (let j = 0; j < binaryArr1[i].length; j++) {
          if (binaryArr1[i][j] === "#" || binaryArr2[i][j] === "#") str += "#"
          else str += " "
      }
      answer.push(str);
  }
  
  return answer;
}

/** 시간복잡도
 * 
 * - decimalToBinary(number) :  O(log(number))
 * - binaryToString(arr) : O(n)
 * - for 반복문 : n
 * - decimalToBinary : O(n * log(m))
 * - binaryToString: O(n^2)
 * - 전체 : O(n^2)
 */