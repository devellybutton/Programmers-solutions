// 이중 반복문

function solution(arr1, arr2) {
  let answer = [];

  // arr1.length는 행의 개수
  // arr2.length는 열의 개수
  for (let i = 0; i < arr1.length; i++) {
    // 배열 안에 배열이 들어가는 이차원 배열의 구조이므로 배열 선언
    let _answer = [];
    for (let j = 0; j < arr1[i].length; j++) {
      _answer.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(_answer);
  }
  return answer;
}

/**
 * 시간 복잡도
 *
 * - n은 행(row)의 수, m은 열(column)의 수
 * - 전체 : O(n * m)
 */
