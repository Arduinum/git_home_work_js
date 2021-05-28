/*
1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/

"use strict";

const productObj = {
    catalogListBlock: null,
    catalogButton: null,
    product_id: null,
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

    init() {
        this.catalogListBlock = document.querySelector(".catalog-list");
        this.generate();
        this.eventHandler();
    },

    eventHandler() {
        this.catalogButton = document.querySelectorAll(".catalog-button");
        for (let i = 0; i < this.catalogButton.length; i++) {
            this.catalogButton[i].addEventListener("click", this.buyProduct.bind(this));
        }
    },

    genCatalogItem(production) {
        return `<div class="catalog">
                    <div><b>Название</b>: ${production.name}</div>
                    <div><b>Цена</b>: ${production.cost + " ₽"}</div>
                    <button id="${production.id}" class="catalog-button">Купить</button>
                </div>`;
    },

    generate() {
        if (this.product.length) {
            this.product.forEach(production => {
                this.catalogListBlock.insertAdjacentHTML("beforeend", this.genCatalogItem(production));
            });
        }
    },

    buyProduct() {
        document.onclick = function (e) {
            this.product_id = e.target.id;
            basketObj.basketAdd(+this.product_id, 1);
        };
    }
};

const basketObj = {
    basketListBlock: null,
    basketButton: null,
    basketCopy: null,
    basket: [],

    basketAdd(id, count) {
        let flag = true;

        for (let i = 0; i < productObj.product.length; i++) {
            if (productObj.product[i]["id"] === id) {
                if (this.basket.length === 0) {
                    let result = productObj.product[i];
                    result["count"] = count;
                    this.basket.push(result);
                }
                else {
                    for (let i = 0; i < this.basket.length; i++) {
                        if (this.basket[i]["id"] === id) {
                            this.basket[i]["count"] += 1;
                            flag = false;
                        }
                    }
                    if (flag === true) {
                        let result = productObj.product[i];
                        result["count"] = count;
                        this.basket.push(result);
                    }
                }
            }
        }

        this.basketCopy = this.basket;
        this.clearBasket();
        this.basket = this.basketCopy;
        this.generate();
    },

    init() {
        this.basketListBlock = document.querySelector(".basket-list");
        this.basketButton = document.querySelector(".basket-button");
        this.basketButton.addEventListener("click", this.clearBasket.bind(this));
        this.generate();
    },

    genBasketItem(production) {
        return `<div class="product">
                    <div><b>Название</b>: ${production.name}</div>
                    <div><b>Цена</b>: ${production.cost + " ₽"}</div>
                    <div><b>Количество</b>: ${production.count}</div>
                    <div><b>Итоговая стоимость</b>: ${production.count * production.cost + " ₽"}</div>
                </div>`;
    },

    generate() {
        if (this.basket.length > 0) {
            this.basketListBlock.textContent = "";
            this.basket.forEach(production => {
                this.basketListBlock.insertAdjacentHTML("beforeend", this.genBasketItem(production));
            });
            this.basketListBlock.insertAdjacentHTML("beforeend", `Итого ${this.countBasketProduct()} товаров на сумму ${this.countBasketPrice()} ₽`);
        }
        else {
            this.basketListBlock.textContent = "Корзина пуста";
        }
    },

    countBasketProduct() {
        let total = 0;
        for (let i = 0; i < this.basket.length; i++) {
            total += this.basket[i]["count"];
        }
        return total;
    },

    countBasketPrice() {
        let total = 0;
        for (let i = 0; i < this.basket.length; i++) {
            total += this.basket[i]["cost"] * this.basket[i]["count"];
        }
        return total;
    },

    clearBasket() {
        this.basket = [];
        this.generate();
    }
}

productObj.init();
basketObj.init();
