function solution(myString, pat) {
  // A => X, B => A, X => B
  const changedString = myString
      .replace(/A/g, "X")
      .replace(/B/g, "A")
      .replace(/X/g, "B")

  return changedString.includes(pat) ? 1 : 0;
}

// 시간복잡도 : O(n)
// replace가 가독성 측면, 메모리 사용 측면에서 더 효율적임.
// 주의할 점은 replace를 사용할 때 덮어씌우지 않도록 제3의 문자를 활용하는 것임.