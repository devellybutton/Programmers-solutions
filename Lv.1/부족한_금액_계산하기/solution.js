function solution(price, money, count) {
    let pay = 0;  // 총 지불해야할 비용
    for (let i = 1; i <= count; i++) {
        pay += price * i;
    }

    // 지불해야할 비용에서 자신이 갖고 있는 돈(money)을 빼기
    if (pay >= money) return pay - money;
    else return 0;
}

/**
 * 시간 복잡도 : O(n)
 * 공간 복잡도 : O(1)
 */