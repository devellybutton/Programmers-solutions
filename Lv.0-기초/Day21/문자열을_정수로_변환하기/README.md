# parseInt()와 Number() 비교

## parsetInt(string, radix)

- <b>string</b> : 숫자로 변환하려는 문자열
    - 문자와 숫자가 섞여 있으면 <b>숫자만</b> 반환
    - 정수만 반환, 소수점 이하 값 무시됨.
- <b>radix</b> : 숫자 진법 (없으면 기본이 10진법)

```
parseInt("123abc");  // 123 (문자 'a'부터는 무시)
parseInt("10.5");    // 10 (소수점 이하 값은 무시)
parseInt("xyz");     // NaN (숫자가 없으므로 변환 불가)
```

## Number(string)
- string : 숫자로 변환하려는 문자열
    - 문자와 숫자가 섞여 있으면 <b>NaN</b>을 반환
    - <b>소수점</b>도 처리함.

```
Number("123abc");  // NaN (문자 'a'부터는 숫자가 아니므로 NaN)
Number("10.5");    // 10.5 (소수도 처리)
Number("123");     // 123 (정수로 변환)
Number("");        // 0 (빈 문자열은 0으로 변환)
Number(" ");       // 0 (공백도 0으로 변환)
```