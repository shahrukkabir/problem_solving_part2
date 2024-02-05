function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
const result = maxOfThree(10, 5, 8);
console.log('Max of three:', result);

const max = Math.max(12,1, 56, 5, 65, 8, 1, 99, 2);
console.log('max issuing Math.max', max);