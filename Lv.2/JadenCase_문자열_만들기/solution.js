function solution(s) {
  const arr = s.split('');  
  
  for (let i = 0; i < arr.length; i++) {  
      // 현재 문자가 첫 번째 문자이거나 이전 문자가 공백이면 첫 문자를 대문자로 변경
      // 그 외의 문자는 소문자로 변환
      if (arr[i-1] === " " || i === 0) {
          arr[i] = arr[i].toUpperCase();  
      } else {
          arr[i] = arr[i].toLowerCase();
      }
  }
  
  return arr.join(""); 
}

/**
 * 시간 복잡도
 * - 전체 : O(n)
 */