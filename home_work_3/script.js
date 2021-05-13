// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

/*
Простое число - это натуральное число, единственными делителями которого являются только оно само и единица.
Натурáльные чиисла это числа, возникающие естественным образом при счёте (1, 2, 3, 4, 5, 6, 7 и так далее...
Составным числом называется натуральное число, которое имеет более двух делителей.
*/

let num = -1;

while (true) {
    ++num;
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) flag = false;
    }
    if (flag === true && num > 1) console.log(num);
    if (num === 100) break;
}


/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let cart = [];

function BasketAdd(name, cost, count) {
    let product = { "name": name, "cost": cost, "count": count };
    cart.push(product);
    return cart;
}

function countBasketPrice(basket) {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
        var mul = cart[i]["cost"] * cart[i]["count"];
        total += mul;
    }
    return total;
}

BasketAdd("Arduino Mega 2560 R3", 5800, 4);
BasketAdd("NUCLEO-F401RE", 1870, 2);
BasketAdd("Raspberry Pi 4 Model B 8GB", 9900, 1);

countBasket = countBasketPrice(cart);
console.log(`Товаров в корзине на сумму ${countBasket} руб`);


/*
3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

for (let i = 0; i <= 9; console.log(i++)) { }


/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 1; i <= 20; i++) {
    console.log("x".repeat(i));
}
