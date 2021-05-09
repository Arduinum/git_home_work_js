// 1. Почему код дает именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1
c = (2 + ++a); alert(c);     // 5
d = (2 + b++); alert(d);     // 4
alert(a);                    // 3
alert(b);                    // 3

/*
c = ++a; alert(c);           // 2
Изначально a = 1, ++a - в префиксной форме инкрементирование происходит сразу, а возврат происходит уже с обновленным значением. Тоесть сначала прибавляется 1, а потом происходит возврат уже с новым значением. Потом присвоение и далее её вывод на экран.

d = b++; alert(d);           // 1
Изначально b = 1, b++ - в постфиксной форме сначала происходит возврат, а потом уже инкреминирование. Тоесть единица прибавилась, но возврат произошёл до прибавления поэтому вернёт 1, а не 2. Правда если будет ещё один возврат ниже под этим примером, то уже вернёт 2. Потом присвоение и далее её вывод на экран.

c = (2 + ++a); alert(c);      // 5
var a = 1 - сначала было значение 1 при объявлении переменной.
c = ++a; alert(c); - в данной операции ниже объявления к a ещё прибавилась 1 и a = 2.
c = (2 + ++a); alert(c); - потом по порядку сначала унарный оператор к a прибавит 1 и a уже a = 3, потом в премере в скобка к значению a прибавится 2 тоесть получиться 2 + 3 = 5 и это значение присвоиться переменной c и далее alert выведет цифру 5.

d = (2 + b++); alert(d);      // 4
var a = 1, b = 1 - при объеявлении переменной b = 1,
d = b++; alert(d); - тут b = 2 в примере под объявлением,
d = (2 + b++); alert(d); - тут в постфиксной форме сначала происходит возврат, а потом уже инкреминирование и поэтому d = 2 + 2 тоесть 4. Тоесть только после возврата значения прибавится ещё 1.

alert(a);                    // 3
c = (2 + ++a); alert(c); - в данном примере выше я рассказывал почему a = 3 и с этим значением больше ничего не произошло поэтому оно и вывелось ниже.

alert(b);                    // 3
d = (2 + b++); alert(d); - в примере выше в постфиксной форме к значению 2 переменной b прибавилась ещё 1 и того b = 3 стало.
*/


// 2. Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2);

/*
x = 5, так как a *= 2 унарный оператор 2 * 2 = 4 и далее 1 + 4 = 5. В скобках любое выражение будет выполнятся отдельно, а потом уже над значением получившимся в скобках будут производится операции в остальном примере. Так даже можно повысить преоритет операции если мы хотим сначала сложить например, а потом умножить то скобки наш выбор.
*/


/*
3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.
*/

var a = 3;
var b = 1;

function countNumsSign(num1, num2) {
    if (Math.sign(num1) === 1 || Math.sign(num1) === 0 && Math.sign(num2) === 1 || Math.sign(num2) === 0) {
        return num1 - num2;
    }
    else if (Math.sign(num1) === -1 && Math.sign(num2) === -1) {
        return num1 * num2;
    }
    else {
        return num1 + num2;
    }
}

alert(`${a} - ${b} = ${countNumsSign(a, b)}`);
a = 3, b = 0;
alert(`${a} - ${b} = ${countNumsSign(a, b)}`);
a = -2, b = -4;
alert(`${a} * ${b} = ${countNumsSign(a, b)}`);
a = -2, b = 3;
alert(`${a} + ${b} = ${countNumsSign(a, b)}`);
a = 0, b = -4;
alert(`${a} + ${b} = ${countNumsSign(a, b)}`);


/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

a = Math.floor(Math.random() * 15);
console.log(a);

switch (a) {
    case 0:
        a += 1;
        console.log(a);
    case 1:
        a += 1;
        console.log(a);
    case 2:
        a += 1;
        console.log(a);
    case 3:
        a += 1;
        console.log(a);
    case 4:
        a += 1;
        console.log(a);
    case 5:
        a += 1;
        console.log(a);
    case 6:
        a += 1;
        console.log(a);
    case 7:
        a += 1;
        console.log(a);
    case 8:
        a += 1;
        console.log(a);
    case 9:
        a += 1;
        console.log(a);
    case 10:
        a += 1;
        console.log(a);
    case 11:
        a += 1;
        console.log(a);
    case 12:
        a += 1;
        console.log(a);
    case 13:
        a += 1;
        console.log(a);
    case 14:
        a += 1;
        console.log(a);
        break;
}


/*
5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/

function getSumNums(num1, num2) {
    return num1 + num2;
}

function getDifferNums(num1, num2) {
    return num1 - num2;
}

function getMultiplNums(num1, num2) {
    return num1 * num2;
}

function getQuotNums(num1, num2) {
    return num1 / num2;
}

alert(getSumNums(1, 2));
alert(getDifferNums(5, 3));
alert(getMultiplNums(6, 6));
alert(getQuotNums(30, 3))


/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(num1, num2, oper) {
    switch (oper) {
        case "+":
            return getSumNums(num1, num2);
        case "-":
            return getDifferNums(num1, num2);
        case "*":
            return getMultiplNums(num1, num2);
        case "/":
            return getQuotNums(num1, num2);
    }
}

alert(`Операция сложения - ${mathOperation(33, 23, "+")}`)
alert(`Операция вычитания - ${mathOperation(33, 23, "-")}`)
alert(`Операция умножения - ${mathOperation(33, 23, "*")}`)
alert(`Операция деления - ${mathOperation(33, 3, "/")}`)


// 7. * Сравнить null и 0. Объяснить результат.

alert("Строгое равенство - null === 0:");
if (null === 0) {
    alert(true);
}
else {
    alert(false);
}

/*
результат false - логично так как типы данных у них точно разные, а строгое равенство сравнивает и типы данных. 0 - это тип данных number (число), а null это тип данных object (объект).
*/

alert("Равенство - null == 0");
if (null == 0) {
    alert(true);
}
else {
    alert(false);
}

/*
результат false - == старается привести типы данных к одинаковым чтоб их сравнить. Так например строка '0' и число 0 были бы равны для этого оператора. Но так как объект в число или число в объект он не привёл это значит что это не возможно и поэтому false.
*/

alert("null > 0");
if (null > 0) {
    alert(true);
}
else {
    alert(false);
}

/*
результат - false думаю что по той же причине что и ==.
*/

alert("null < 0");
if (null > 0) {
    alert(true);
}
else {
    alert(false);
}

/*
результат - false для перепроверки, обратного результата примеру выше не последовало.
*/


/*
8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

function power(val, pow) {
    if (val <= 0 || !Number.isInteger(val)) return 'Задайте целое число больше 0';
    if (pow === 1) return val;
    return (val * power(val, pow - 1));
}

a = 2;
b = 4;
alert(`${a} в степени ${b} = ${power(a, b)}`);
a = -1;
b = 4;
alert(`${a} в степени ${b} = ${power(a, b)}`);
