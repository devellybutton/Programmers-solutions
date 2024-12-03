function solution(arr) {
  const answer = [];
  
  // 
  arr.forEach(el => {
    answer.push(...Array(el).fill(el))
  })
  return answer;
}

/**
 * Array(el) : 길이가 el인 빈 배열 생성
 * fill(el) : 배열의 모든 요소를 el로 채워라
 * 
 * const arr = Array(3).fill(7);
 * console.log(arr);  // [7, 7, 7]
 */

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n * m) (n은 배열의 길이, m은 각 배열 요소의 값)
 */
