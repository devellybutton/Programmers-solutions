function solution(name, yearning, photo) {
  const answer = [];
  
  // name과 yearing을 해시로 저장
  const map = new Map();
  for (let i = 0; i < name.length; i++) {
      map.set(name[i], yearning[i])
  }

  // 이차원배열 photo를 순회하면서 점수를 계산
  for (people of photo) {
      let score = 0;
      for (person of people) {
          if (map.has(person)) score += map.get(person)
      }
      answer.push(score);
  }
  return answer;
}

/**
 * 시간복잡도
 * 
 * - map 생성 : O(N) (name 배열의 길이)
 * - photo 배열 순회 점수 계산 : O(M)
 * - 전체 : O(N)(map을 만드는 시간) + O(P * M)(사진 순회하는 시간) (M: 사람 수, P: 사진의 개수수)
 * - 최악 : O(100 * 100) = O(10,000)
 */