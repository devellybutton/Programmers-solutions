function solution(n, arr1, arr2) {
  return arr1.map((num1, index) => {
    // arr1과 arr2의 대응값을 OR연산으로 합침
    const combined = num1 | arr2[index];
    
    // 이진수로 변환 후, 길이를 n에 맞게 맞추고, 1이면 "#", 0이면 " "으로 변환
    return combined
      .toString(2) // 이진수로 변환
      .padStart(n, '0')  // 길이를 n에 맞추기
      .replace(/1/g, "#")  // 1을 #으로 변환
      .replace(/0/g, ' ')  // 0을 공백으로 변환
  })
}