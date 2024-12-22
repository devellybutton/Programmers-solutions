function solution(babbling) {
  // 발음할 수 있는 단어의 집합 words
  const words = ["aya", "ye", "woo", "ma"];
  
  let count = 0; // 발음할 수 있는 단어의 개수
  
  // babbling 배열을 하나씩 처리
  for (let sound of babbling) {
      // 단어의 길이가 2 미만이면 발음할 수 없으니 다음 단어로 넘어감.
      if (sound.length < 2) continue;
      
      let prev = []; // 발음할 수 있는 부분을 저장할 배열

      // 단어를 계속 잘라가며 처리하는 반복문
      while (true) {
          let found = false; // 현재 음절을 찾았는지 여부
          
          // words 배열의 각 발음이 sound의 앞부분과 일치하는지 체크
          for (const word of words) {
              if (sound.startsWith(word)) {
                  // word와 일치하는 부분을 잘라내고 나머지 이후부터 처리
                  prev.push(word); // 해당 발음을 prev에 저장
                  sound = sound.slice(word.length); // 일치한 부분을 잘라낸 후 남은 부분
                  found = true;
                  break; // 더 이상 다른 단어를 찾을 필요 없으므로 빠져나감.
              }
          }
          
          // 찾은 게 없으면 while 반복문 종료
          if (!found) break;
      }
      
      // prev가 words의 부분집합인지 확인
      const isSubset = prev.every(el => words.includes(el));
      
      // prev에 있는 원소들이 연속해서 나오면 안됨
      let isInARow = false; // 연속된 발음 여부
      for (let i = 0; i < prev.length - 1; i++) {
          if (prev[i] === prev[i+1]) isInARow = true; // 연속된 발음이 있으면 true
      }
      
      // isSubset이 true이고, 연속된 발음이 없고, 나머지 부분이 모두 소진되었을 때
      // 즉, 발음할 수 있는 단어로만 이루어져 있고, 연속된 발음이 없으면 count 증가
      if (isSubset && !isInARow && prev.length !== 0 && sound.length === 0) count++;
  }
  
  return count; // 발음할 수 있는 단어의 개수 반환
}

/**
 * 시간복잡도
 * - 전체 : O(n * m) (n은 babbling 배열의 크기, m은 각 sound의 길이)
 */