let newMap = new Map();

newMap.set('key1','number1');
newMap.set('key2','number2');
newMap.set('key3','number3');


for (let items of newMap) {
console.log(`Ключ - ${items[0]}, значение - ${items[1]}`)