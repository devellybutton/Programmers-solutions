
## 약수의 개수 구할 때 최적화 안 하면 시간초과됨.

### 최적화 X
![image](https://github.com/user-attachments/assets/9118e460-585a-4f0e-9adf-ee33159a3f81)


### 최적화 O
![image](https://github.com/user-attachments/assets/ce9ae6cb-817e-4c2a-93f4-41963edffb6c)

---

# 최적화 방법

## solution.js
```
function countOfDivisors(num){
    if (num === 1) return 1;
    let count = 2; // 1과 자기 자신은 무조건 약수이므로 2부터 시작
    // 2부터 num의 제곱근까지 반복
    // 만약 36의 경우 2가 나누어 떨어지면, 18도 약수가 되므로 카운트를 1개씩 더 증가시킴
    // 6일 경우에는 i=6, num/i=6이므로 카운트가 1개만 증가함.
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            count++;
            if (i !== num/i) count++;
        }
    }
    return count;
}
```
- 반복문에서 구하는 수 말고, 그 제곱근까지만 순회하면 됨.
- 해당 수를 곱했을 때 num이 되는 수가 있으면 count를 증가시켜줌.

## solution2.js
```
  // 1부터 number까지 약수의 개수를 구함
  for (let i = 1; i <= number; i++) {
      for (let j = i; j <= number; j += i) {
          divisors[j]++;  // i는 j의 약수이므로 divisors[j]에 1을 더함
      }
  }
```
- i는 약수를 찾을 수 있는 수
- j는 i의 배수

### i = 1
```
divisors = [0, 1, 1, 1, 1, 1]; 
```
### i = 2
```
divisors = [0, 1, 2, 1, 2, 1]; 
```
### i = 3
```
divisors = [0, 1, 2, 2, 2, 1]; 
```
### i = 4
```
divisors = [0, 1, 2, 2, 3, 1]; 
```
### i = 5
```
divisors = [0, 1, 2, 2, 3, 2]; 
```