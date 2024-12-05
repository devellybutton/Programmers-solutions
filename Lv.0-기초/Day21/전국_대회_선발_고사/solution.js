function solution(rank, attendance) {
  // attendance가 true인 것 중에서 등수가 높은(숫자가 낮은) 번호 3개만 뽑기
  // 10000 × a + 100 × b + c 리턴
  const indices = attendance
                      .map((el, idx) => el ? idx : -1)
                      .filter((idx) => idx !== -1);
  
  // 인덱스 배열(학생 변호)에서 rank를 기준으로 정렬
  const top3Available = indices
                        .sort((a, b) => rank[a] - rank[b])
                        .slice(0, 3);

  const [a, b, c] = top3Available;
  
  return 10000 * a + 100 * b + c;
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n log n)
 */