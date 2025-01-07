function countNumber1(num) {
  return num.toString(2).split('').filter(el => el === "1").length;
}

function solution(n) {
  // n의 1의 개수를 카운트한다.
  // n부터 반복문으로 숫자를 1개씩 올리면서 이진수로 변환한다
  // 변환한 이진수의 1의 개수를 카운트한다.
  // 그걸 n의 개수와 비교해서 같으면 그게 'n의 다음 큰 숫자'임.
  const nCount = countNumber1(n);
  let next = n + 1; 
  
  while (countNumber1(next) !== nCount) {
      next++;
  }
  
  return next;
}