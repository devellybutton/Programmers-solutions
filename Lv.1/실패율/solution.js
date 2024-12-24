function solution(N, stages) {
  // 스테이지 개수에 맞는 배열 생성
  const arr = Array.from({ length: N }, (_, idx => idx + 1));
  const map = new Map();

  // 실패율 : 분자 / 분모
  // 분모 : 해당 숫자 이상의 수의 개수 (denominator)
  // 분자 : 해당 수의 개수 (numerator)
  // 정렬할 때 같은 스테이지면 번호가 앞부터 
  for (let i = 0; i < stages.length; i++) {
      let denominator = stages.filter(el => el >= stages[i]).length;
      let numerator = stages.filter(el => el === stages[i]).length;
      let failureRate = (numerator / denominator)
      map.set(stages[i], failureRate);
  }
  
  if (arr.length !== [...map].length) {
      for (let i = 1; i <= N; i++) {
          if (!map.has(i)) map.set(i, 0)
      }
  }
  
  // arr 배열에서 해당 원소에 해당하는 걸 map에서 찾아와서 값을 가져옴.
  return arr.sort((a, b) => map.get(b) - map.get(a));
}