const chessBoardTable = document.getElementById("chess-board");

function onSubmit() {
    const rowCount = document.getElementById("rowCount").value;
    const columnCount = document.getElementById("columnCount").value;

    for (let j = 0; j < columnCount; j++) {
        const rowBoard = document.createElement("tr");

        if (j % 2 != 0) {
            for (let i = 0; i < rowCount; i++) {
                if (i % 2 === 0) {
                    const blackBox = document.createElement("td");
                    blackBox.className = "black-box";
                    rowBoard.appendChild(blackBox);
                } else {
                    const whiteBox = document.createElement("td");
                    whiteBox.className = "white-box";
                    rowBoard.appendChild(whiteBox);
                }
            }
        } else {
            for (let i = 0; i < rowCount; i++) {
                if (i % 2 === 0) {
                    const whiteBox = document.createElement("td");
                    whiteBox.className = "white-box";
                    rowBoard.appendChild(whiteBox);
                } else {
                    const blackBox = document.createElement("td");
                    blackBox.className = "black-box";
                    rowBoard.appendChild(blackBox);
                }
            }
        }

        chessBoardTable.appendChild(rowBoard);
    }
}