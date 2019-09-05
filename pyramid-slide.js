let dropdownFunction = () => {
    let currentSymbol = document.getElementById("dropdown").value;
    console.log(currentSymbol);
    drawPyramid();
}


let sliderFunction = () => {
    let slider = document.getElementById("slideCounter");
    document.getElementById("rowCounter").innerHTML = slider.value;
    drawPyramid();

}


let spacer = (drawSymbol) => {
    if (drawSymbol == "@") {
        return 4;
    }
    
    if (drawSymbol == "X") {
        return 3;
    }
    return 2;
}


let drawPyramid = () => {
    let height = document.getElementById("slideCounter").value;
    let drawSymbol = document.getElementById("dropdown").value;
    document.getElementById("drawPyramid").innerHTML = "";

    let spaces = spacer(drawSymbol)
    console.log(spaces);

    for (let row = 0; row < height; row++) {

        let numBricks = row + 2;
        let numSpaces = height - row - 1;

        let rowStr = "";
        for (let i = 0; i < numSpaces; i++) {
            let spaceChar = "&nbsp";
            rowStr += spaceChar.repeat(spaces);
        }
        for (let i = 0; i < numBricks; i++) {
            rowStr += drawSymbol;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("drawPyramid").appendChild(rowElem);
    }
}