// 정규 표현식을 사용

function solution(s) {
  return /^[0-9]{4}^[0-9]{6}$/.test(s)
}