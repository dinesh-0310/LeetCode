/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
   const priorityQueue = new MaxPriorityQueue({compare: (a, b) => b - a});
   for(const num of nums){
    priorityQueue.enqueue(num);
   }
   let score = 0;
   while(k > 0){
    const ele = priorityQueue.dequeue();
    score += ele;
    priorityQueue.enqueue(Math.ceil(ele / 3));
    k--;
   }
   return score;
};