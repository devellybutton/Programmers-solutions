## sort()
```
(a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
```
- <b>`a - b < 0`</b> : a가 b보다 작음
- <b>`a - b > 0`</b> : a가 b보다 큼
- <b>`a - b === 0`</b> : 두 값이 같음 

<br>

- 지금 문자열 비교라서 안 됨.
```
if (aFirst > bFirst) return aFirst - bFirst;
else if (aFirst < bFirst) return bFirst - aFirst;
else return 0;
```

