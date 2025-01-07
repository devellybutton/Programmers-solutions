- num.toString()을 하면 기본적으로 10진수로 인식이 됨.
- 편하게 num.toString(2)를 하면 2진수로 변환이 됨. <br>
=> solution.js에서 convertBinary 함수는 필요 없음.

```
const num = 10;

// 1. num.toString() — 기본적으로 10진수로 변환
const decimalString = num.toString();  // "10"
console.log(`toString(): ${decimalString}`);  // 10진수로 변환: "10"

// 2. num.toString(2) — 2진수로 변환
const binaryString = num.toString(2);  // "1010"
console.log(`toString(2): ${binaryString}`);  // 2진수로 변환: "1010"
```