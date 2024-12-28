function solution(keymap, targets) {
  const map = new Map();

  // keymap에서 각 문자의 최소 클릭 횟수 기록
  keymap.forEach(key => {
      [...key].forEach((char, index) => {
          if (!map.has(char)) {
              map.set(char, index + 1);
          } else {
              map.set(char, Math.min(map.get(char), index + 1));
          }
      });
  });

  const result = targets.map(target => {
      let totalClicks = 0;

      // 각 target 문자열의 문자에 대해 클릭 횟수 합산
      for (const char of target) {
          if (!map.has(char)) {
              return -1;  // 해당 문자를 만들 수 없으면 -1 반환
          }
          totalClicks += map.get(char);
      }

      return totalClicks;
  });

  return result;
}