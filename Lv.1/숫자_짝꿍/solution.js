function solution(X, Y) {
  const xArr = X.split('').map(Number);  // X를 각 자릿수로 분리하여 숫자 배열로 변환
  const yArr = Y.split('').map(Number);  // Y를 각 자릿수로 분리하여 숫자 배열로 변환
  
  const map1 = new Map();  // X에서 각 숫자의 등장 횟수를 저장할 Map
  const map2 = new Map();  // Y에서 각 숫자의 등장 횟수를 저장할 Map
  let answer = "";  // 결과로 나올 짝꿍을 저장할 변수
  
  // X 배열의 숫자 등장 횟수 계산
  for (let i = 0; i < xArr.length; i++) {
      map1.set(xArr[i], (map1.get(xArr[i]) || 0) + 1);
  }
  
  // Y 배열의 숫자 등장 횟수 계산
  for (let i = 0; i < yArr.length; i++) {
      map2.set(yArr[i], (map2.get(yArr[i]) || 0) + 1);
  }

  // X와 Y의 공통 숫자를 찾아서 가능한 짝꿍을 구하기
  for (let [key, value] of map1) {
      let min;
      if (map2.has(key)) {  // Y에 해당 숫자가 있을 경우
          min = Math.min(value, map2.get(key));  // X와 Y에서 나타나는 횟수 중 작은 값을 선택
          answer += key.toString().repeat(min);  // 그 숫자를 반복해서 짝꿍에 추가
      }
  }
  
  // 짝꿍이 없으면 "-1" 반환
  if (answer === "") return "-1"
  else {
      // 결과를 내림차순으로 정렬하여 가장 큰 수 만들기
      const arr = answer.split("");  // 각 숫자를 문자로 분리
      const sortedArr = arr.map(Number).sort((a, b) => b - a);  // 내림차순 정렬
      // 만약 모든 숫자가 0이라면 "0" 반환
      if (sortedArr.every(el => el === 0)) return "0";
      return sortedArr.join("");  // 결과를 문자열로 합쳐서 반환
  }
}

/**
 * 
 */