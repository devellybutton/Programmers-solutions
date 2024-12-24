function getRank(num) {
  // 로또 순위를 결정하는 함수
  switch (num) {
      case 6:
          return 1; // 6개 번호가 일치하면 1등
      case 5:
          return 2; // 5개 번호가 일치하면 2등
      case 4:
          return 3; // 4개 번호가 일치하면 3등
      case 3:
          return 4; // 3개 번호가 일치하면 4등
      case 2:
          return 5; // 2개 번호가 일치하면 5등
      default:
          return 6; // 그 외는 6등 (낙첨)
  }
}

function solution(lottos, win_nums) {
  let count = 0; // 일치하는 번호의 개수를 셀 변수
  const map = new Map(); // lottos에 있는 번호들을 저장할 맵

  // lottos 배열을 순회하면서 0이 아닌 번호를 map에 넣기
  for (let i = 0; i < lottos.length; i++) {
      if (lottos[i] !== 0) map.set(lottos[i], 1);
  }

  // win_nums 배열을 순회하면서, 해당 번호가 lottos에 존재하면 count 증가
  for (let i = 0; i < win_nums.length; i++) {
      if (map.has(win_nums[i])) count++;
  }

  // 최저 순위: 이미 일치하는 번호 개수
  let min = count;
  // 최고 순위: 일치하는 번호에 lottos에서 0인 개수를 더한 값
  let max = count + lottos.filter(el => el === 0).length;

  // 최고 순위와 최저 순위 반환
  return [getRank(max), getRank(min)];
}

/**
 * 시간 복잡도
 * - getRank 함수 : O(1)
 * - 첫 번째 for문 : O(6) (map.set()이 O(1))
 * - 두 번째 for문 : O(6) (map.has()가 O(1))
 * - 전체 : O(1)
 */