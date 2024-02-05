// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];
let min = heights2[0];

for (const number of heights2) {
    if (number < min) {
        min = number;
    }
}

console.log('The lowest number is:', min);
