# 카카오의 출제 의도
- 비트 연산자 OR로 풀면 됨.
![image](https://github.com/user-attachments/assets/77d8af60-f0f7-4cf9-8385-8fc2bf3b3ffc)

---

# 각 풀이 설명

- solution.js : 노동. 수제로 변환. 효율성 안 좋음. (O(n^2))
- solution2.js : 비트 연산자 활용
- solution3.js : solution2.js에서 시프트연산자 사용하지 않은 버전전
- solution4.js : 위랑 비슷한데 정규식 활용

---

### toString()
- type이 문자로 변하는 것뿐만 아니라 진법 계산도 해줌.
```
let num = 5;

let string = num.toString();
console.log(string); // "5"

let binary = num.toString(2);
console.log(binary);  // "101"

let ternary = num.toString(3);
// 1 * 3^1 + 2 * 3^0 
console.log(binary2);  // "12"
```

### padStart(n, '0')
- 문자열의 길이를 n으로 맞추고, 문자열이 n보다 짧으면 앞에 '0'을 추가
```
let binary = "101";
let paddedBinary = binary.padStart(8, '0');
console.log(paddedBinary);  // "00000101"
```

### 시프트 연산자 (>>)
- 비트 단위로 숫자를 오른쪽으로 이동시킴.
- num >> i
    - num: 비트 연산을 적용할 숫자.
    - i: 이동할 비트의 수.
```
let num = 5;  // 이진수로는 101
let shifted = num >> 1;  // 010 (5의 이진수에서 오른쪽으로 1비트 이동)
console.log(shifted);  // 2 (이진수로 10)
```