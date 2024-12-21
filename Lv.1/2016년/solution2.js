// solution.js와 같은 원리인데 누적합을 활용
/*
prefixDays[0] = 0
prefixDays[1] = prefixDays[0] + daysInMonth[1] = 0 + 31 = 31 
prefixDays[2] = prefixDays[1] + daysInMonth[2] = 31 + 29 = 60
prefixDays[3] = prefixDays[2] + daysInMonth[3] = 60 + 31 = 91
*/

function solution(a, b) {
  // 2016년 각 월별 날짜 수 (윤년)
  const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  // 요일 배열 (금요일이 첫 번째 요일이므로 FRI부터 시작)
  const weekDays = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  
  // 월별 날짜 수 누적합 배열을 계산
  const prefixDays = Array(13).fill(0);
  for (let i = 1; i <= 12; i++) {
      // 5월인 경우 prefixDays[5] = 4월까지 누적합합 + 5월 전체
      prefixDays[i] = prefixDays[i - 1] + daysInMonth[i];
  }

  // 1월 1일부터 a월 b일까지의 총 일수를 계산
  // 1월 1일 = 1일, 1월 2일 = 2일
  // 5월 24일이라고 하면 4월까지의 누적합 + 24일
  const totalDays = prefixDays[a - 1] + b;

  // 요일 계산
  return weekDays[totalDays % 7];
}