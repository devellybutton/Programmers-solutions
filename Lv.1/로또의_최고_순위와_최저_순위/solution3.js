// 두 배열을 비교하는 방식
// 시간복잡도가 O(n log n)이라 비효율적임.

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
  // lottos와 win_nums 배열을 정렬
  const sortedLottos = lottos.filter(num => num !== 0).sort();
  const sortedWinNums = win_nums.sort();

  // 일치하는 번호의 개수 세기
  let count = 0;
  let zeroCount = lottos.filter(num => num === 0).length;

  for (let i = 0; i < sortedLottos.length; i++) {
      if (sortedWinNums.includes(sortedLottos[i])) {
          count++;
      }
  }

  // 최고 순위와 최저 순위 계산
  return [getRank(count + zeroCount), getRank(count)];
}

/**
 * 시간 복잡도
 * - 전체 : O(n log n)
 */