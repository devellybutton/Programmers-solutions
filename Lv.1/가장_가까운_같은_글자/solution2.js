function solution(s) {
	const answer = [];
	const lastSeen = {};  // 각 문자가 마지막으로 나온 인덱스를 저장

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (lastSeen[char] === undefined) {
			// 문자가 처음 나왔을 때는 -1을 기록
			answer.push(-1);
		} else {
			// 문자가 이미 나온 적이 있다면 그 인덱스 차이를 기록
			answer.push(i - lastSeen[char]);
		}
		// 현재 문자의 인덱스를 기록
		lastSeen[char] = i;
	}

	return answer;
}

/**
 * 시간 복잡도
 * 
 * - 전체 : O(n)
 */