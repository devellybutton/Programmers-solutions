// reduce를 사용하여 배열을 변경

function solution(arr1, arr2) {
  return arr1.reduce((acc, row, i) => {
    acc.push(row.map((value, j) => value + arr2[i][j]));
    return acc;
  }, []);
}
