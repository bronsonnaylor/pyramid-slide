let height = document.getElementById("slideCounter");
let drawSymbol = document.getElementById("dropdown");

let sliderFunction = () => {
    document.getElementById("rowCounter").innerHTML = height.value;
    drawPyramid();
}
let spacer = () => {
    if (drawSymbol.value == "@") {
        return 4;
    }
    
    if (drawSymbol.value == "X") {
        return 3;
    }
    return 2;
}

let drawPyramid = () => {
    document.getElementById("drawPyramid").innerHTML = "";

    for (let row = 0; row < height.value; row++) {

        let numBricks = row + 2;
        let numSpaces = height.value - row - 1;

        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp;";
            rowStr += spaceChar.repeat(spacer());
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += drawSymbol.value;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("drawPyramid").appendChild(rowElem);
    }
}
