/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    for (let i=0; i<times.length; i++) {
        times[i].push(i);
    }

    times.sort((a, b) => a[0] - b[0]);
    let seats = [];

     for (let friend of times) {
        let i = 0;
        if (seats.length == 0) seats.push(friend[1]);
        else {
            while (seats[i] > friend[0]) {
                i++;
            }
            if (i < seats.length) {
                seats[i] = friend[1];
            } else {
                seats.push(friend[1]);
            }
        }
        // Check if the current friend is target friend
        if (friend[2] == targetFriend) {
            return i;
        }
    }
    return 0;
};