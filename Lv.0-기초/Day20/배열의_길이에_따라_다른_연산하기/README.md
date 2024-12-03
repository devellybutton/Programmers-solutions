```
function solution(arr, n) {
    let N = arr.length;
    
    // 배열의 길이가 홀수
    if (N % 2 === 1) {
        for (let i = 0; i < N; i = i + 2) {
            arr[i] = arr[i] + n;
        }
    } else {
        for (let i = 1; i < N; i = i + 2) {
            arr[i] = arr[i] + n;
        }
    }
    return arr;
}
```