function solution(s) {
  return s
      .split(' ')
      .map(word => {
        // 맨 앞글자는 대문자, 나머지는(인덱스 1부터) 소문자자
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
}

/**
 * 시간 복잡도
 * - 전체 : O(n)
 */