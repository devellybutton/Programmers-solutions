// solution.js의 디버깅 콘솔 추가한 버전

function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;
  
  for (let sound of babbling) {
      console.log("현재 처리 중인 단어:", sound); // 현재 단어 확인
      if (sound.length < 2) continue;
      
      let prev = [];
      
      while (true) {
          let found = false;
          for (const word of words) {
              console.log(`현재 sound: ${sound}, 비교 중인 word: ${word}`); // 현재 비교 중인 `sound`와 `word` 확인
              if (sound.startsWith(word)) {
                  console.log(`매칭된 word: ${word}`);  // 매칭된 단어 출력
                  prev.push(word);
                  sound = sound.slice(word.length);
                  found = true;
                  break;
              }
          }
          if (!found) break;
      }
      
      console.log("현재 prev 배열:", prev); // prev 배열의 상태 확인
      console.log("현재 남은 sound:", sound);  // 남은 `sound`가 무엇인지 확인
      
      const isSubset = prev.every(el => words.includes(el));
      let isInARow = false;
      for (let i = 0; i < prev.length - 1; i++) {
          console.log(`비교 중: prev[${i}] = ${prev[i]}와 prev[${i+1}] = ${prev[i+1]}`); // 비교 중인 발음 확인
          if (prev[i] === prev[i+1]) isInARow = true;
      }
      console.log("연속된 발음 여부:", isInARow);  // 연속된 발음이 있는지 확인
      
      console.log(`isSubset: ${isSubset}, isInARow: ${isInARow}, sound.length: ${sound.length}, prev.length: ${prev.length}`);
      if (isSubset && !isInARow && prev.length !== 0 && sound.length === 0) count++;
  }
  
  return count;
}