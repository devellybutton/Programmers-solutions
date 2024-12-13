## solution.js : isNaN

### parseInt vs Number

- <b>parseInt()</b> : 정수가 아닌 수가 등장하면 그 이전까지의 정수만 반환
```
parseInt("123abc");  // 결과: 123
parseInt("abc123");  // 결과: NaN
```

- <b>Number()</b> : 문자열 전체가 숫자인 경우 숫자, 아니면 NaN
```
Number("123abc");  // 결과: NaN
Number("123");     // 결과: 123
```

### Number.isNaN vs isNaN

- <b>isNaN()</b> : 값이 NaN인지 확인, 값이 어떤 것이라도 다 숫자로 변환함
```
isNaN("123abc");  // 결과: true (문자열을 숫자로 변환하려 시도해 NaN이 됨)
isNaN("123");     // 결과: false (숫자형 문자열이므로 변환 성공)
isNaN(true);      // 결과: false (true는 1로 변환됨)
isNaN(undefined); // 결과: true (undefined는 NaN으로 변환됨)
```

- <b>Number.isNaN()</b> : 값이 정확히 NaN인지 확인, 타입 변환 없음
```
Number.isNaN("123abc");  // 결과: false ("123abc"는 NaN이 아님)
Number.isNaN("123");     // 결과: false ("123"은 NaN이 아님)
Number.isNaN(true);      // 결과: false (true는 NaN이 아님)
Number.isNaN(undefined); // 결과: false (undefined는 NaN이 아님)
Number.isNaN(NaN);      // 결과: true (정확히 NaN인 경우)
```

## solution2.js : 정규표현식
```
function solution(s) {
  return /^[0-9]{4}^[0-9]{6}$/.test(s)
}
```

- <b>`^[0-9]{4}$`</b> : 4자리 숫자만으로 구성
- <b>`^[0-9]{6}$`</b> : 6자리 숫자만으로 구성
- <b>`|`</b> : OR 연산자로 두 조건을 동시에 검사
- <b>`test(s)`</b> : 문자열 s가 정규표현식과 일치하는지 여부 boolean 반환