function solution(num_list) {
  return num_list.sort((a, b)=>(a - b)).slice(0, 5);
}

/**
 * 시간 복잡도
 * 
 * - O(n log n)
 */