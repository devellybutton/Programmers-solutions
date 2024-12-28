function solution(s, skip, index) {
  const sList = s.split('');
  const skipSet = new Set(skip);
  const answer = [];
  
  // sList의 원소를 순회하면서, count가 index가 될 때까지 
  // 원소의 아스키코드를 1개씩 증가시킨다.
  for (let i = 0; i < sList.length; i++) {
      // sList에서의 현재 문자를 아스키코드로 변경함.
      let current = sList[i].charCodeAt();
      let count = 0;
      
      // 만약 skipSet이 현재 문자를 가지고 있지 않으면 카운트 증가
      while (count < index) {
          current++;  // 한 문자씩 이동;
          if (current > 122) current = 97;  // z넘어가면 97로 변경
          if (!skipSet.has(String.fromCharCode(current))) count++;
      }
      
      answer.push(String.fromCharCode(current));
  }
  
  return answer.join('');
}

/**
 * 시간 복잡도
 * - s.split('') : O(n)
 * - skipSet 생성 : O(k)
 * - for 반복문 : O(n)
 * - 전체 : O(n)
 */