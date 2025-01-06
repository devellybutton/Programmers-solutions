// solution.js를 리팩토링한 코드

function solution(survey, choices) {
  const map = new Map([
      ["R", 0],
      ["T", 0],
      ["F", 0],
      ["C", 0],
      ["M", 0],
      ["J", 0],
      ["A", 0],
      ["N", 0]
  ]);
  
  for (let i = 0; i < choices.length; i++) {
      const [first, second] = survey[i].split('');
      const score = choices[i];

      if (score === 4) continue;

      // 첫 번째 선택지가 더 앞에 있는 경우
      if (score < 4) {
          map.set(first, map.get(first) + (4 - score));
      }
      // 두 번째 선택지가 더 앞에 있는 경우
      else {
          map.set(second, map.get(second) + (score - 4));
      }
  }

  // 각 지표에서 더 높은 점수의 성격 유형을 구하기
  const result = [
      map.get("R") >= map.get("T") ? "R" : "T",
      map.get("C") >= map.get("F") ? "C" : "F",
      map.get("J") >= map.get("M") ? "J" : "M",
      map.get("A") >= map.get("N") ? "A" : "N"
  ];

  return result.join("");
}