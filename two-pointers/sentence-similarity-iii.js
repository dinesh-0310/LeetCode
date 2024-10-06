/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    if(sentence1 === sentence2) return true;
    let words1 = sentence1.split(" ");
    let words2 = sentence2.split(" ");

    if(words1.length < words2.length){
        //swap
        [words1, words2] = [words2, words1];
    }
    
    let start = 0, end = 0;

    while(start < words2.length && words1[start] == words2[start]){
        start++;
    }

    while(end < words2.length && words1[words1.length - 1 - end] == words2[words2.length - 1 - end]){
        end++;
    }

    if(start + end >= words2.length) return true;
    return false;
};