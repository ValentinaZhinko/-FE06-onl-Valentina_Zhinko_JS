
const data = [
    {
        product : 'Молоко',
        price : 40,
        count : 2,
    } ,
    {
        product : 'Картошка',
        price : 14,
        count : 10,
    } ,
    {
        product : 'Минералка',
        price : 29,
        count : 2,
    } ,
    {
        product : 'Хлеб',
        price : 19,
        count : 1,
    } ,
    {
        product : 'Конфеты',
        price : 11,
        count : 15,
    } 
];
let sum = 0;
for (let i = 0; i < data.length; i++) { 
     sum += data[i].price * data[i].count
     
}
console.log(sum)
let amount = +prompt('Сколько у вас денег?',0);
let days = Math.floor(amount / sum);
let rest= amount % sum
alert (`Семья Петровичей на указанную сумму сможет прожить ${days} дней. Остаток: ${rest} рублей` )









