function solution(a, b) {
  // 2016년 각 월별 날짜 수 (윤년)
  // daysInMonth[0]은 사용되지 않으므로 0으로 두고, 1월부터 12월까지의 날짜 수를 배열로 나타냄
  const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // 1월 1일은 금요일이고, 그 날짜를 기준으로 며칠이 지났는지 계산
  // 시작 날짜인 1월 1일을 기준으로 0일째이므로, totalDays는 -1로 시작
  const weekDays = ["FRI", "SAT", "SUN", "MON", "TUE","WED","THU"];
  
  // 1월 1일부터 지난 날짜 일수
  // 만약 1월 3일이면 totalDay는 2가 됨.
  let totalDays = -1;
  
  // 월수 더해주기
  for (let i = 1; i < a; i++) {
      totalDays += daysInMonth[i];
  }
  
  // 일수 더해주기
  totalDays += b;
  
  // 0 -> FRI, 1 -> SAT, 2 -> SUN 이런식으로 더해줌
  return weekDays[totalDays % 7]
}

/**
 * 시간 복잡도
 * - for 반복문: O(1) (a가 최대 12이므로 최악 12)
 * - totalDays 계산 : O(1)
 * - 전체 : O(1)
 */