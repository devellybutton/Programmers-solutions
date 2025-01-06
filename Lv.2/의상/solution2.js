// solution.js를 object와 reduce를 사용하여 더 간결하게 개선

function solution(clothes) {
  // reduce를 사용하여 의상 종류별로 의상 개수 계산
  const map = clothes.reduce((acc, [name, type]) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
  }, {});

  // 각 의상 종류에 대해 선택할 수 있는 경우의 수를 모두 곱하고, 아무것도 입지 않는 경우를 제외
  return Object.values(map).reduce((acc, count) => acc * (count + 1), 1) - 1;
}