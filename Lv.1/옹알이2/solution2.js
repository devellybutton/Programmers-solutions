function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  
  let count = 0;

  // babbling 배열을 처리
  for (let sound of babbling) {
      let prev = ""; 
      let valid = true;

      while (sound.length > 0) {
          let matched = false;

          // words 배열에서 일치하는 발음 찾기
          for (const word of words) {
              if (sound.startsWith(word)) {
                  // 일치하면 단어를 prev로 갱신하고, sound에서 제거
                  if (prev === word) {
                      valid = false; // 연속된 발음 발견
                      break;
                  }
                  prev = word;
                  sound = sound.slice(word.length); // 잘라내기
                  matched = true;
                  break;
              }
          }

          // 일치하는 발음이 없으면 무효
          if (!matched) {
              valid = false;
              break;
          }
      }

      // 유효한 발음인 경우 count 증가
      if (valid && sound.length === 0) {
          count++;
      }
  }

  return count;
}