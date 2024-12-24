// 정규식 쓰기 어려움

function solution(dartResult) {
  // 각 세트를 정규 표현식으로 분리
  const regex = /(\d+)([SDT])([*#]?)/g;
  const scores = [];
  
  let match;
  while ((match = regex.exec(dartResult)) !== null) {
    const [_, score, bonus, option] = match;
    let numScore = parseInt(score);
    
    // 보너스 처리
    if (bonus === 'D') numScore = Math.pow(numScore, 2);
    if (bonus === 'T') numScore = Math.pow(numScore, 3);
    
    // 옵션 처리
    if (option === '#') numScore = -numScore;
    if (option === '*') {
      numScore *= 2;
      if (scores.length > 0) scores[scores.length - 1] *= 2; // 이전 점수도 2배
    }
    
    scores.push(numScore);
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}

/**
 * 시간 복잡도
 * - O(n)
 */