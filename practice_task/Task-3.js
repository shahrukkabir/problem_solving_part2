/* 
   Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk

    Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(numLaptops, numTablets, numMobiles) {
    
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalBudget = (numLaptops * laptopPrice) + (numTablets * tabletPrice) + (numMobiles * mobilePrice);

    return totalBudget;
}

const laptops = 2;
const tablets = 3;
const mobiles = 1;

const totalBudgetRequired = calculateElectronicsBudget(laptops, tablets, mobiles);
console.log('Total budget required:', totalBudgetRequired, 'tk');
