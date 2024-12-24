// map 대신 set을 사용하여 더 간결하게 풀 수 있음.

function getRank(num) {
  switch (num) {
      case 6:
          return 1;
      case 5:
          return 2;
      case 4:
          return 3;
      case 3:
          return 4;
      case 2:
          return 5;
      default:
          return 6;
  }
}

function solution(lottos, win_nums) {
  const lottoSet = new Set(lottos.filter(num => num !== 0));  // 0을 제외한 lottos의 번호들
  let count = 0;

  // win_nums와 lottos의 일치 번호를 세는 작업
  for (let num of win_nums) {
    if (lottoSet.has(num)) {
      count++;
    }
  }

  // 0의 개수
  const zeroCount = lottos.filter(num => num === 0).length;

  // 최대 : 0제외 + 나머지 번호들
  // 최소 : 나머지 번호들
  return [getRank(count + zeroCount), getRank(count)];
}