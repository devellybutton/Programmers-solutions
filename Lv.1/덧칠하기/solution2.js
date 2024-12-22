// 큐를 사용한 풀이
// 순차적으로 페인트 칠해야 할 구역을 처리

function solution(n, m, section) {
  let count = 0; // 필요한 페인트칠 횟수
  let idx = 0; // 현재 페인트칠을 해야하는 구역의 인덱스

  // section을 큐처럼 다룰 수 있는 반복문
  while (idx < section.length) {
    // 페인트칠을 시작해야하는 구역
    let start = section[idx];

    // 롤러 길이를 고려하여 칠할 수 있는 끝 구역
    let end = start + m - 1;

    console.log(`\n새로운 페인트칠 시작: start = ${start}, end = ${end}`);

    while (idx < section.length && section[idx] <= end) {
      console.log(`현재 idx = ${idx}, section[idx] = ${section[idx]} 범위 내에 포함됨`);
      idx++;
    }

    // 한 번의 칠을 끝내고 나면 횟수 증가
    count++;
    console.log(`한 번의 칠을 끝냄, 페인트칠 횟수 = ${count}`);
  }

  return count;
}
