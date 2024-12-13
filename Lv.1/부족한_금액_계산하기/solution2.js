// 재귀로도 풀 수 있음.

function solution(price, money, count) {
  // 재귀적으로 총 요금을 계산하는 함수
  function calculateTotalCost(currentCount) {
      // 기저 조건: currentCount가 0이면 더 이상 요금을 계산할 필요 없음
      if (currentCount === 0) return 0;
      
      // 이번 타는 요금(price * currentCount)과 나머지 타는 횟수에 대한 총 요금을 합산
      return price * currentCount + calculateTotalCost(currentCount - 1);
  }

  // 재귀적으로 계산한 총 요금을 totalCost에 저장
  const totalCost = calculateTotalCost(count);

  // 총 요금에서 가진 금액을 뺀 부족한 금액 계산
  const shortage = totalCost - money;

  // 부족한 금액이 있으면 반환, 없으면 0을 반환
  return shortage > 0 ? shortage : 0;
}

/**
 * 시간 복잡도 : O(n)
 * 공간 복잡도 : O(n)
 * 10,000번 이상의 재귀 호출 X
 */