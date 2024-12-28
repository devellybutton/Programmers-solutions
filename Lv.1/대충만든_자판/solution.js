function solution(keymap, targets) {
  // keymap에 있는 문자들을 기반으로 각 문자에 대한 최소 클릭 횟수를 저장하는 해시맵(map)을 생성
  const map = new Map();
  for (const key of keymap) {
      const arr = key.split("");  // 각 키에 있는 문자들을 배열로 나누기
      for (let i = 0; i < arr.length; i++) {
          // 해당 문자가 아직 map에 없거나, 현재 map에 저장된 값보다 더 작은 클릭 횟수라면 갱신
          if (!map.get(arr[i]) && map.get(arr[i]) !== 0) { 
              map.set(arr[i], i + 1);  // i+1은 첫 번째, 두 번째, 세 번째... 눌렀을 때의 횟수
          } else {
              map.set(arr[i], Math.min(i + 1, map.get(arr[i])));  // 더 작은 클릭 횟수를 저장
          }
      }
  }

  const answer = [];

  // 각 target 문자열에 대해 처리
  for (const target of targets) {
      let letter = "";
      let sum = 0;
      
      // 각 target 문자열의 문자에 대해 최소 클릭 횟수 합산
      // 해당 문자가 map에 있다면 클릭 횟수를 합산
      // 해당 문자가 map에 없으면 만들 수 없다는 의미로 -1을 반환
      // 주의 ) 더 이상 계산할 필요가 없으므로 break를 써줘야 함.
      for (let i = 0; i < target.length; i++) {
          if (map.has(target[i])) {  
              sum += map.get(target[i]);  
          } else {  
              sum = -1;  
              break;  
          }
      }
      answer.push(sum);  // 해당 target 문자열의 클릭 횟수를 answer에 추가
  }
  
  return answer;  // 최종적으로 계산된 클릭 횟수 배열 반환
}

/**
 * 시간 복잡도
 * - keymap 처리 : O(k * m) (k: keymap의 길이, m: 각 keymap의 최대 길이)
 * - targets 처리 : O(t * n) (t: targets의 길이, n은 각 target의 최대 길이)
 * - 전체 : O(k * m + t * n)
 */