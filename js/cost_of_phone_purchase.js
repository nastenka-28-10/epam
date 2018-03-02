/*Напишите программу для вычисления общей стоимости покупки телефона. Вы будете продолжать покупать телефоны (подсказка: циклы!) пока у вас не закончатся деньги на банковском счете. Вы также будете покупать аксессуары для каждого из телефонов до тех пор, пока сумма покупки не превысит ваш мысленный предел трат.
После того, как вы посчитаете сумму покупки, прибавьте налог, затем выведите на экран вычисленную сумму покупки, правильно отформатировав её.
Наконец, сверьте сумму с балансом вашего банковского счета, чтобы понять можете вы себе это позволить или нет.
Вы должны настроить некоторые константы для «ставки налога», «цены телефона», «цены аксессуара» и «предела трат» также как и переменную для вашего «баланса банковского счета».
Вам следует определить функции для вычисления налога и для форматирования цены со знаком валюты и округлением до двух знаков после запятой.
Бонусная задача: Попробуйте включить ввод данных в вашу программу, например с помощью prompt(..), рассмотренную ранее в разделе «Ввод». Вы можете, например, запросить у пользователя баланс банковского счета. Развлекайтесь и будьте изобретательны!*/
const MAX_AMOUNT = prompt("Enter your limit of purchases:");
const PHONE_COST = 1159.99;
const ACCESSORY_COST = 55.99;
const TAX_RATE = 0.05;

let bank_account = 16878.43;
let total_amount = 0;

function format_output(total_amount){
    total_amount = total_amount.toFixed(2);
    return `$${total_amount}`;
}
function tax_rate_amount(total_amount){
    return total_amount+total_amount*TAX_RATE;
}

while(total_amount+PHONE_COST <= bank_account){
    total_amount+=PHONE_COST;
    if(total_amount+ACCESSORY_COST <= MAX_AMOUNT){
        total_amount+=ACCESSORY_COST;
    } 
}
console.log(`bank_account: ${bank_account}, total_amount: ${total_amount}`)
total_amount = tax_rate_amount(total_amount);
if(total_amount>bank_account){
    console.log("You have not enough money!");
    total_amount = format_output(total_amount);
    console.log(`Total amount with tax rate: ${total_amount}`);
} else{
    console.log("Purchase successful!")
    bank_account-=total_amount;
    total_amount = format_output(total_amount);
    console.log(`Total amount with tax rate: ${total_amount}, your bank accaunt: ${bank_account}`);
}
