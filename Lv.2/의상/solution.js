// 의상을 map에 넣는 건 쉬운데, 조합 수 계산하는 방법을 모르면 무조건 틀림.

function solution(clothes) {
  // 의상 종류별로 의상을 저장할 Map 생성
  const map = new Map();
  
  // 의상 배열을 돌면서 각 의상의 종류에 맞는 의상 목록을 Map에 저장
  for (let i = 0; i < clothes.length; i++) {
      // 의상 종류가 Map에 없으면 새로 추가하고, 있으면 해당 종류에 의상을 추가
      if (!map.get(clothes[i][1])) {
          map.set(clothes[i][1], [clothes[i][0]]);
      } else {
          map.get(clothes[i][1]).push(clothes[i][0]);
      }
  }

  // 가능한 조합의 수를 계산할 변수, 기본값은 1로 설정
  let sum = 1;

  // 각 의상 종류에 대해 가능한 의상 개수를 구해 조합 수를 계산
  for (let [key, value] of map) {
      // 각 종류에서 의상은 1개 이상 착용할 수 있으므로 (value.length + 1)
      // (value.length + 1)은 해당 종류의 의상 개수 + 1(아무것도 안 입은 경우)
      sum *= (value.length + 1);
  }

  // 아무것도 입지 않은 경우(모든 의상 안 입었을 때)를 제외하기 위해 1을 빼고 반환
  return sum - 1;
}

/**
 * 시간 복잡도
 * - map에 의상 정보를 저장 : O(n) 
 * - map을 순회하며 가능한 조합 수를 계산 :  O(k) (k는 의상 종류의 개수)
 * - 전체 : O(n + k) (n은 의상의 개수, k는 의상 종류의 개수)
 */