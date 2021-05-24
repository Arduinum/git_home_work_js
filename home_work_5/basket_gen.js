/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

"use strict";

const productObj = {
    product: [
        {
            id: 331,
            name: "Arduino Mega 2560 R3",
            cost: 5800
        },
        {
            id: 623,
            name: "NUCLEO-F401RE",
            cost: 1870
        },
        {
            id: 551,
            name: "Raspberry Pi 4 Model B 8GB",
            cost: 9900
        }
    ],
    genProduct() {
        const myTable = document.createElement("table");
        myTable.style.borderCollapse = "collapse";

        for (let i = 0; i < this.product.length; i++) {
            const trElm = document.createElement("tr");
            const cellName = document.createElement("td");
            cellName.style.border = "1px solid #000000";
            cellName.textContent += this.product[i]["name"];
            const cellCost = document.createElement("td");
            cellCost.style.border = "1px solid #000000";
            cellCost.textContent += this.product[i]["cost"] + " ₽";

            trElm.appendChild(cellName);
            trElm.appendChild(cellCost);
            myTable.appendChild(trElm);
        }
        document.getElementById("catalog").appendChild(myTable);
    }
};

const basketObj = {
    basket: [],
    basketAdd(id, count) {
        for (let i = 0; i < productObj.product.length; i++) {
            if (productObj.product[i]["id"] === id) {
                let result = productObj.product[i];
                result["count"] = count;
                this.basket.push(result);
            }
        }
    },
    countBasketPrice() {
        let total = 0;
        for (let i = 0; i < this.basket.length; i++) {
            total += this.basket[i]["cost"] * this.basket[i]["count"];
        }
        return total;
    },
    countBasketProduct() {
        let total = 0;
        for (let i = 0; i < this.basket.length; i++) {
            total += this.basket[i]["count"];
        }
        return total;
    },
    genBasket() {
        const myTable = document.createElement("table");
        myTable.style.borderCollapse = "collapse";

        if (this.basket.length === 0) {
            const trElm = document.createElement("tr");
            const cellEmpty = document.createElement("td");
            cellEmpty.style.border = "1px solid #000000";
            cellEmpty.textContent += "Корзина пуста!";
            trElm.appendChild(cellEmpty);
            myTable.appendChild(trElm);
            document.getElementById("basket").appendChild(myTable);
        }
        else {
            for (let i = 0; i < this.basket.length; i++) {
                const trElm = document.createElement("tr");
                const cellName = document.createElement("td");
                cellName.style.border = "1px solid #000000";
                cellName.textContent += this.basket[i]["name"];
                const cellCost = document.createElement("td");
                cellCost.style.border = "1px solid #000000";
                cellCost.textContent += this.basket[i]["cost"] * this.basket[i]["count"] + " ₽";
                const cellCount = document.createElement("td");
                cellCount.style.border = "1px solid #000000";
                cellCount.textContent += this.basket[i]["count"] + " шт";

                trElm.appendChild(cellName);
                trElm.appendChild(cellCost);
                trElm.appendChild(cellCount);
                myTable.appendChild(trElm);
            }

            const trElm = document.createElement("tr");
            const cellTextSum = document.createElement("td");
            cellTextSum.style.border = "1px solid #000000";
            cellTextSum.textContent += "В корзине товаров на сумму"
            const cellSum = document.createElement("td");
            cellSum.style.border = "1px solid #000000";
            cellSum.textContent += this.countBasketPrice() + " ₽";
            const cellProductSum = document.createElement("td");
            cellProductSum.style.border = "1px solid #000000";
            cellProductSum.textContent += this.countBasketProduct() + " шт";

            trElm.appendChild(cellTextSum);
            trElm.appendChild(cellSum);
            trElm.appendChild(cellProductSum);
            myTable.appendChild(trElm);
            document.getElementById("basket").appendChild(myTable);
        }
    }
};


basketObj.basketAdd(331, 4);
basketObj.basketAdd(623, 2);
basketObj.basketAdd(551, 1);
basketObj.genBasket();
productObj.genProduct();
