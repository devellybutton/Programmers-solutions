### solution.js
- <b>O(n^2)</b>
- 불필요한 stack 배열을 매번 초기화
- 배열이 큰 경우(예: 내림차순으로 정렬된 배열) 거의 모든 요소를 검사해야 해서 비효율적
![image](https://github.com/user-attachments/assets/4afeca98-2f13-487e-a751-768735863907)

### solution2.js
- <b>O(n)</b>
- 단 한 번의 순회로 모든 결과를 계산
- 스택에 값 대신 인덱스를 저장하여 메모리 효율 개선
![image](https://github.com/user-attachments/assets/65b4ad85-9fd6-4ef1-b873-11c7a18c9b85)