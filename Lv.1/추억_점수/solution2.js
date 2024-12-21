function solution(name, yearning, photo) {
  const answer = [];
  
  // name과 yearning을 Map으로 매핑
  const map = new Map(name.map((n, i) => [n, yearning[i]]));

  // photo 배열을 순회하며 추억 점수 계산
  photo.forEach(people => {
      const score = people.reduce((sum, person) => sum + (map.get(person) || 0), 0);
      answer.push(score);
  });
  
  return answer;
}

/**
 * 시간복잡도
 * 
 * - map 객체 : O(N)
 * - photo 배열 순회 : O(P * M)
 * - 전체 : O(N + P * M)
 * - 최악 : O(100 + 100 * 100) = O(10,100)
 */