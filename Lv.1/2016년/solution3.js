function solution(a, b) {
  // 2016년 1월 1일이 금요일(FRI)이므로, 이를 기준으로 날짜를 계산
  const date = new Date(2016, a - 1, b); // 0부터 시작하는 월을 사용하므로 a-1
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  // 해당 날짜의 요일을 구하고, 이를 배열 인덱스로 반환
  return weekDays[date.getDay()]; // getDay()는 0(SUN)부터 6(SAT)까지 반환
}

// getDay() : 0(일요일)부터 6(토요일)까지 반환

/**
 * 시간 복잡도
 * - O(1)
 */