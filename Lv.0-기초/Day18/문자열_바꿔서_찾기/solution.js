function solution(myString, pat) {
  const changedString = myString.split("")
      .map(el => el === "A" 
           ? el = "B" 
              : el === "B" 
                  ? el = "A" 
                      : el = el)
  return changedString.join("").includes(pat) ? 1 : 0;
}

// 시간복잡도 : O(n)