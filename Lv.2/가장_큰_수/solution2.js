// solution.js를 리팩토링

function solution(numbers) {
  const sortedNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));

  // 모든 숫자가 0이면 0 반환
  if (sortedNumbers[0] === "0") return "0";

  return sortedNumbers.join("");
}
