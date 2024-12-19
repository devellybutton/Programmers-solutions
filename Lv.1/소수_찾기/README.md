- solution.js : 원래 문제, n까지의 소수의 개수
- solution2.js : 만약 소수를 직접 반환하라고 할 경우

```
primeNumber.filter(Boolean).length
```
- filter(Boolean) : 배열에서 truthy값만 반환
- truthy값 : 모든 숫자(0제외), 모든 문자열(빈 문자열 제외), 모듣 객체, function, true
- falsy값 : 0, null, undefined, NaN, "" (빈 문자열) 