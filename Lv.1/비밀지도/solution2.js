function solution(n, arr1, arr2) {
  return arr1.map((num1, index) => {
    // 비트 OR 연산
    const combined = num1 | arr2[index];

    // 이진수로 변환, 길이 n에 맞게 맞추기
    // 각 비트를 공백이나 샵으로 변환
    let result = "";
    for (let i = n - 1; i >= 0; i--) {
      if ((combined >> i) & 1) result += "#";
      else result += " ";
    }
    return result;
  });
}
