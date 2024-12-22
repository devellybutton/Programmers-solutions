function solution(n, m, section) {
  let paintFinished = 0; // 페인트칠 끝나는 구역의 번호
  let count = 0;  // 필요한 페인트칠 횟수
  
  // section의 시작 부분부터 칠한다
  for (let i = 0; i < section.length; i++) {
      // 만약 현재 구역이 이미 페인트칠이 끝난 구역이면 건너뜀
      if (section[i] <= paintFinished) continue;
      
      // 페인트칠을 새로 해야하는 경우
      // 롤러 길이 m만큼 칠하고 나서의 구역 번호로 업데이트
      // 주의할 점은 m이 아니라 m-1씩 더해야 한다는 것임
      paintFinished = section[i] + (m-1);
      count++;
  }
  
  return count;
}

/**
 * 시간 복잡도
 * - 전체 : O(n) (n은 section배열의 길이)
 */