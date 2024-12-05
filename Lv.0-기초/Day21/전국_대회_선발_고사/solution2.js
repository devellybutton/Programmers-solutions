// 배열 안에 객체를 넣는 풀이
// 깔끔하고 체계적으로 저장되어 이해하기 쉬움.

function solution(rank, attendance) {
  // 1. 참석 가능한 학생들만 필터링 하여 (순위, 인덱스) 객체를 배열로 생성
  const availableStudents = attendance
    .map((canAttend, idx) => canAttend ? { idx, rank: rank[idx]} : null)
    .filter(student => student !== null);

  // 2. 참석 가능한 학생들을 순위를 기준으로 오름차순 정렬
  availableStudents.sort((a, b) => a.rank - b.rank);

  // 3. 상위 3명 학생을 선택하여 계산
  const [first, second, third] = availableStudents.slice(0, 3);
  return 10000 * first.idx + 100 * second.idx + third.idx;
}

/*
[
    { idx: 0, rank: 3 },  // 0번 학생은 대회 참석 가능
    null,                 // 1번 학생은 대회 참석 불가
    { idx: 2, rank: 2 },  // 2번 학생은 대회 참석 가능
    { idx: 3, rank: 4 }   // 3번 학생은 대회 참석 가능
]
*/

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n log n)
 */