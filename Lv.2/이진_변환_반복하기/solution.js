function solution(s) {
  let binary = 0; // 이진 변환 횟수
  let zero = 0; // 제거한 0의 개수
  let string = s; // 주어진 문자열

  // string이 "1"이 될 때까지 반복
  while (string !== "1") {
      // s에서 0의 개수를 셈
      for (let num of string) {
          if (num === "0") zero++; // 0을 찾으면 개수 증가
      }

      // 문자열에서 0을 제거한 새로운 배열 생성
      const newS = string.split('').filter(el => el !== "0");

      // 0을 제거한 후 새로운 문자열의 길이
      let newNum = newS.length;
      
      // 새로운 길이를 이진수로 변환
      let result = "";
      while (newNum > 0) {
          result = (newNum % 2) + result; // 나머지를 이진수로 추가
          newNum = Math.floor(newNum / 2); // 새로운 숫자
      }
      
      binary++; // 이진 변환 횟수 증가
      string = result; // 새로운 문자열로 업데이트
  }
  
  return [binary, zero]; // 이진 변환 횟수와 제거된 0의 개수를 반환
}

/**
 * 시간 복잡도
 * -while (string !== "1") 반복문 : O(n) ~ o(n log n) (??? 잘 모르겠음)
 * - for (let num of string)문 : O(m) (m은 string의 길이)
 * - 이진수 변환 : O(log m) (m은 string의 길이)
 * - 전체 : O(n log n) ???
 */