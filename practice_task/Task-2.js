// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let shortestName = friends[0];

for (const friend of friends) {
    if (friend.length < shortestName.length) {
        shortestName = friend;
    }
}

console.log('Friend with the smallest name:', shortestName);
