// map을 두 번 사용

// 첫 번째 map : 행을 순회
// 두 번째 map : 열을 순회

function solution(arr1, arr2) {
  return arr1.map((row, i) => 
    row.map((value, j) => value + arr2[i][j])
  )
}
