/* 
  You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
   
      const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { mode2: "PhoneB", brand: "Samsung", price: 40000 },
        { mode3: "PhoneC", brand: "Oppo", price: 26000 },
        { mode4: "PhoneD", brand: "Nokia", price: 35000 },
        { mode5: "PhoneE", brand: "Iphone", price: 105000 },
        { mode6: "PhoneF", brand: "HTC", price: 48000 },
    ];

*/

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let sum = 0;
    for(const phone of phones){
       sum += phone.price;
    }
    let len = phones.length;
    const avg = sum / len;
    return avg;
}

const average = findAveragePhonePrice(phones);
console.log('Average phone price:', average);
