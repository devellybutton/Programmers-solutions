function solution(survey, choices) {
  // 각 성격 유형의 점수를 기록할 맵을 초기화
  const map = new Map();
  map.set("R", 0);  // R 성격의 점수
  map.set("T", 0);  // T 성격의 점수
  map.set("F", 0);  // F 성격의 점수
  map.set("C", 0);  // C 성격의 점수
  map.set("M", 0);  // M 성격의 점수
  map.set("J", 0);  // J 성격의 점수
  map.set("A", 0);  // A 성격의 점수
  map.set("N", 0);  // N 성격의 점수
  
  // choices 배열을 순회하며 점수 계산
  for (let i = 0; i < choices.length; i++) {
      // 4는 선택하지 않은 것과 같으므로 넘긴다.
      if (choices[i] === 4) continue;
      
      // survey[i]에서 첫 번째, 두 번째 항목을 나눠서 저장
      let first = survey[i].split('')[0];  // 첫 번째 성격 유형
      let second = survey[i].split('')[1]; // 두 번째 성격 유형

      // 점수에 따라 해당 성격 유형의 점수를 추가
      if (choices[i] === 1) map.set(first, map.get(first) + 3);  // 1일 경우 첫 번째 성격에 3점 추가
      if (choices[i] === 2) map.set(first, map.get(first) + 2);  // 2일 경우 첫 번째 성격에 2점 추가
      if (choices[i] === 3) map.set(first, map.get(first) + 1);  // 3일 경우 첫 번째 성격에 1점 추가
      if (choices[i] === 5) map.set(second, map.get(second) + 1); // 5일 경우 두 번째 성격에 1점 추가
      if (choices[i] === 6) map.set(second, map.get(second) + 2); // 6일 경우 두 번째 성격에 2점 추가
      if (choices[i] === 7) map.set(second, map.get(second) + 3); // 7일 경우 두 번째 성격에 3점 추가
  }

  // 각 성격 유형별로 점수를 비교하여 더 높은 성격 유형을 선택
  let answer = [];
  for (let [category, value] of map) {
      // R과 T 비교
      if (category === "R" || category === "T") {
          if (map.get("R") > map.get("T")) answer.push("R");
          else if (map.get("R") === map.get("T")) answer.push("R"); // 동점이면 R을 선택
          else answer.push("T");
      }
      // C와 F 비교
      else if (category === "F" || category === "C") {
          if (map.get("C") > map.get("F")) answer.push("C");
          else if (map.get("C") === map.get("F")) answer.push("C"); // 동점이면 C를 선택
          else answer.push("F");
      }
      // J와 M 비교
      else if (category === "J" || category === "M") {
          if (map.get("J") > map.get("M")) answer.push("J");
          else if (map.get("J") === map.get("M")) answer.push("J"); // 동점이면 J를 선택
          else answer.push("M");
      }
      // A와 N 비교
      else {
          if (map.get("A") > map.get("N")) answer.push("A");
          else if (map.get("A") === map.get("N")) answer.push("A"); // 동점이면 A를 선택
          else answer.push("N");
      }
  }

  // 중복을 제거하고 성격 유형을 합쳐서 반환
  return answer.filter((el, idx) => answer.indexOf(el) === idx).join("");
}

/**
 * 시간 복잡도
 * - O(n) (choices 배열 순회) + O(n) (결과 배열 필터링 및 문자열 합치기)
 * - 전체 : O(n)
 */