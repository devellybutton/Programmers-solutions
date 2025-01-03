function solution(numbers) {
  // 문자열로 두 수를 이어붙였을 때 더 큰 수를 찾으면 됨.
  const sortedNumbers = numbers.sort((a, b) => {
      let aFirst = a.toString() + b.toString();
      let bFirst = b.toString() + a.toString();
      if (aFirst > bFirst) return -1;
      else if (aFirst < bFirst) return 1;
      else return 0;
  })

  // 배열의 모든 원소가 0인 경우 "0"
  // "000" 같은 경우는 통과가 안 됨.
  if (sortedNumbers.every(el => el === 0)) return "0";

  return sortedNumbers.join('')
}

/**
 * 시간 복잡도
 * - numbers.sort() : O(n log n)
 * - a.toString() + b.toString() : O(n) (숫자의 개수 최대 n개만큼 소요됨)
 * - sortedNumbers.every() : O(n)
 * - sortedNumbers.join('') : O(n)
 * - 전체 : O(n log n)
 */