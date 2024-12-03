# 배열 관련 문법 정리

> #### 배열 생성
> - [Array(length)](#arraylength)
> - [Array.fill(value)]((#arrayfillvalue))
> - [Array.from()](#arrayfrom)
> - [스프레드 문법](#스프레드-문법)
> #### 배열 슬라이싱
> - [slice](#slice시작-인덱스-끝-인덱스)
> - [splice](#splice시작-인덱스-개수)

<br>

# 배열 생성

### Array(length)
- 지정된 길이만큼 빈 배열 생성, 값은 없음.
    ```
    const arr = new Array(5);
    console.log(arr);  // [empty × 5]
    ```

### Array.fill(value)
- 배열의 모든 원소를 지정된 값으로 채움
    ```
    const arr = new Array(5).fill(3);  
    console.log(arr);  // [3, 3, 3, 3, 3]
    ```

- 이미 원소가 지정된 배열에 대해서는 기존 원소를 덮어씀.
    ```
    let arr = [1, 2, 3, 4, 5];
    arr.fill(0);  // 모든 원소를 0으로 덮어씀
    console.log(arr);  // [0, 0, 0, 0, 0]
    ```

### Array.from()
- 배열 길이와 값을 동적 설정
- 길이만 지정하고, 값을 동적으로 설정
    ```
    const arr = Array.from({ length: 5 }, (_, index) => index);
    console.log(arr);
    ```

- 문자열을 배열로 변환
    ```
    const str = 'hello';
    const arr = Array.from(str);
    console.log(arr);  // [ 'h', 'e', 'l', 'l', 'o' ]
    ```

### 스프레드 문법(...)
- 배열 복사 혹은 다른 배열과 결합
- 배열 복사
    ```
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1];  // [1, 2, 3]
    console.log(arr2);
    ```
            
- 배열 결합
    ```
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [...arr1, ...arr2];  // [1, 2, 3, 4]
    console.log(arr3);
    ```

----

# 배열 슬라이싱

### slice(시작 인덱스, 끝 인덱스)
- 시작 인덱스부터 <b>(끝 인덱스 - 1)</b>까지 복사됨.
- 원본 배열 <b>변경하지 않음</b>.

- 시작, 끝 지정하는 경우
    ```
    let arr = [1, 2, 3, 4];
    let newArr = arr.slice(1, 3);  // 인덱스 1부터 2까지 추출
    console.log(newArr);  // [2, 3]
    console.log(arr);     // [1, 2, 3, 4] (원본은 변경되지 않음)
    ```

- 시작만 지정하는 경우
    ```
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice(2);  // 인덱스 2부터 끝까지 추출
    console.log(newArr);  // [3, 4, 5]
    console.log(arr);     // [1, 2, 3, 4, 5] (원본은 변경되지 않음)
    ```

- 인덱스를 음수로 지정하는 경우
    ```
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice(-3);  // 뒤에서 3개 원소 추출
    console.log(newArr);  // [3, 4, 5]
    ```

- 메서드 안에 어떤 수도 넣지 않은 경우 (원본 배열 복사됨)
    ```
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.slice();  // 시작과 끝을 생략하면 전체 배열을 복사
    console.log(newArr);  // [1, 2, 3, 4, 5]
    console.log(arr);     // [1, 2, 3, 4, 5] (원본 배열은 변경되지 않음)
    ```


### splice(시작 인덱스, 개수)
- 시작 인덱스부터 <b>개수</b>만큼 복사됨.
- 원본 배열 <b>변경</b>함.
- splice로 분리한 배열을 다른 곳에 반환해서 사용 가능, 기존 배열이랑 분리됨.

- 배열에서 원소 삭제
    ```
    let arr = [1, 2, 3, 4, 5];
    let removed = arr.splice(1, 2);  // 인덱스 1부터 2개 원소 삭제
    console.log(removed);  // [2, 3]
    console.log(arr);      // [1, 4, 5] (원본 배열이 수정됨)
    ```
- 배열에 원소 삽입
    ```
    let arr = [1, 2, 3, 4];
    arr.splice(2, 0, 5, 6);  // 인덱스 2에 5, 6 삽입
    console.log(arr);  // [1, 2, 5, 6, 3, 4]
    ```
- 배열에서 원소 교체
    ```
    let arr = [1, 2, 3, 4];
    arr.splice(1, 2, 5, 6);  // 인덱스 1부터 2개 원소를 삭제하고, 5, 6을 삽입
    console.log(arr);  // [1, 5, 6, 4]
    ```