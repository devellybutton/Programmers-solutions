// solution2.js에서 시프트 연산자 사용하지 않는 버전전

function solution(n, arr1, arr2) {
  return arr1.map((num1, index) => {
    // 비트 OR 연산
    const combined = num1 | arr2[index];

    // 이진수로 변환 후 길이 n에 맞게 맞추기
    // 이진수 문자열로 변환
    let binary = combined.toString(2);

    // 이진수 문자열 길이를 맞추기 위해 0을 앞에 추가
    binary = binary.padStart(n, '0');

    // 각 비트를 공백이나 샵으로 변환
    let result = "";
    for (let i = 0; i < n; i++) {
      if (binary[i] === '1') result += "#";
      else result += " ";
    }
    return result;
  });
}