/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 */

// настройки для шахматной доски
const settings_desk = {
    rowCount: 8,
    colCount: 8,
    cellBlack: "#000000",
    cellWhite: "#ffffff",
    colLetters: "ABCDEFGH",
};

function genChessDesk() {

    const myDivBorder = document.createElement("div");
    myDivBorder.classList.add("border");
    document.body.appendChild(myDivBorder);

    const myDivConteiner = document.createElement("div");
    myDivConteiner.classList.add("conteiner");
    myDivBorder.appendChild(myDivConteiner);

    const myDivBlockNumbers = document.createElement("div");
    myDivBlockNumbers.classList.add("block_numbers");
    myDivConteiner.appendChild(myDivBlockNumbers);

    const myTable = document.createElement("table");
    myTable.id = "chess_desk";
    myDivConteiner.appendChild(myTable);

    const myDivBlockLetters = document.createElement("div");
    myDivBlockLetters.classList.add("block_letters");
    myDivBorder.appendChild(myDivBlockLetters);

    for (let i = 8; i > 0; i--) {
        const myDivNumber = document.createElement("div");
        myDivNumber.classList.add("number");
        myDivNumber.textContent += i;
        myDivBlockNumbers.appendChild(myDivNumber);
    }

    for (let i = 0; i < settings_desk.colLetters.length; i++) {
        const myDivletter = document.createElement("div");
        myDivletter.classList.add("letter");
        myDivletter.textContent += settings_desk.colLetters[i];
        myDivBlockLetters.appendChild(myDivletter);
    }

    let flag = true

    for (let row = 0; row < settings_desk.rowCount; row++) {
        const trElem = document.createElement('tr');

        for (let col = 0; col < settings_desk.colCount; col++) {
            const cell = document.createElement('td');
            if (flag === true) {
                if (col % 2 !== 0) {
                    cell.style.backgroundColor = settings_desk.cellBlack;
                    trElem.appendChild(cell);
                }
                else {
                    cell.style.backgroundColor = settings_desk.cellWhite;
                    trElem.appendChild(cell);
                }
            }
            if (flag === false) {
                if (col % 2 === 0) {
                    cell.style.backgroundColor = settings_desk.cellBlack;
                    trElem.appendChild(cell);
                }
                else {
                    cell.style.backgroundColor = settings_desk.cellWhite;
                    trElem.appendChild(cell);
                }
            }
            document.getElementById("chess_desk").appendChild(trElem);
        }
        if (flag === true) {
            flag = false;
        }
        else flag = true;
    }


}

let result = genChessDesk();
