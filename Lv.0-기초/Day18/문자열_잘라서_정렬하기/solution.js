// localeCompare 메서드가 없는 경우
// => charCodeAt으로 비교 가능함.
// a : 97, z : 122, A : 65, Z : 90

function solution(myString) {
  return myString
      .split('x')
      .filter(el => el) // 정규식 안 써도 빈문자열 제외됨.
      .sort((a, b) => {
        // 사전순 정렬
        let i = 0;
        while (i < a.length && i < b.length) {
          // b가 뒤에 있는 경우 a가 앞에 오도록 -1 반환
          if (a.charCodeAt(i) < b.charCodeAt(i)) return -100 
          // a가 뒤에 있는 경우 b가 앞에 오도록 1 반환
          if (a.charCodeAt(i) > b.charCodeAt(i)) return 100
          i++;
        }
        // 만약 같은 문자열의 조합인데, 문자열의 길이가 다르면
        // 길이가 짧은 문자열이 먼저 오도록 함.
        // aaa aaaaaaa 
        return a.length - b.length;
      })
}

/**
 * arr.sort([compareFunction]);
 * 
 * compareFunction(a, b) 
 * - 0보다 작은 경우 : a를 b보다 낮은 색인으로 정렬
 * - 0보다 큰 경우, b를 a보다 낮은 인덱스로 소트
 */


/**
 * 시간 복잡도
 * 
 * - split('x') : O(n)
 * - filter : O(m * k) (최악 O(n))
 * - sort : O(m log m) (최악 O(n log n))
 * - charCodeAt() : 각 문자별로 호출, O(min(m, n))
 * - 전체 :  O(n log n * n) (문자열 길이가 길면 성능 저하될 듯)
 */