// 논리는 어렵지 않지만 처리해줘야할 게 많아서 집중해서 풀어야 함.

function solution(id_list, report, k) {
  const answer = [];
  
  // report를 순회하면서 신고 내용의 중복을 제거 (set을 활용)
  const noDuplicates = new Set();
  for (let i = 0; i < report.length; i++) {
      noDuplicates.add(report[i])
  }
  
  // 신고 당한 유저의 신고 횟수 계산
  const map = new Map();
  for (const list of noDuplicates) {
      let user = list.split(' ')[1];
      map.set(user, (map.get(user) || 0) + 1);
  }
  
  // 신고 횟수가 k보다 크거나 같은 사람은 정지시킬 사용자 목록에 추가
  const blockUsers = [];
  for (const [user, count] of map) {
      if (count >= k) blockUsers.push(user);
  }
  
  // 메일 받는 사람을 위한 map 초기화
  const mail = new Map();
  id_list.forEach(name => mail.set(name, 0));
  
   // 신고 내역을 순회하며, 신고 당한 유저가 정지된 유저일 경우 신고한 유저의 메일 횟수 증가
  // noDuplicates[1] blockUsers에 해당되는 사람이면 
  // noDuplicates[0]과 같은 유저를 map에서 메일 횟수 증가
  for (const list of noDuplicates) {
      const [user1, user2] = list.split(' ');
      if (blockUsers.includes(user2)) {
          mail.set(user1, mail.get(user1) + 1);    
      }
  }

  // 메일을 받은 횟수 결과를 answer 배열에 담기
  for (const [user, count] of mail) {
      answer.push(count)
  }
  
  return answer;
}

/**
 * 시간 복잡도
 * - 중복 신고 제거 (set에 삽입) : O(1)
 * - 신고당한 유저 횟수 : O(M) (M: 중복을 제거한 신고 수)
 * - 정지된 유저 찾는 부분 : O(N)
 * - 메일 횟수 업데이트 : O(M) 
 * - 전체 : O(N + M) (N: 신고 수, M: 중복 제거 후 신고 수)
 */