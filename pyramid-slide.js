let dropdownFunction = () => {
    let currentSymbol = document.getElementById("dropdown").value;
    console.log(currentSymbol);
    return currentSymbol;
}


let sliderFunction = () => {
    let slider = document.getElementById("slideCounter");
    document.getElementById("rowCounter").innerHTML = slider.value;
    drawPyramid();

}


let spacer = (drawSymbol) => {
    let spaces = 2;

    if (drawSymbol == "@") {
        return spaces = 4;
    }
    
    if (drawSymbol == "X") {
        return spaces = 3;
    }

    return spaces = 2;
}


let drawPyramid = () => {
    let height = document.getElementById("slideCounter").value;
    let drawSymbol = dropdownFunction();
    document.getElementById("drawPyramid").innerHTML = "";

    let spaces = spacer(drawSymbol)
    console.log(spaces);

    for (var row = 0; row < height; row++) {

        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp";
            rowStr += spaceChar.repeat(spaces);
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += drawSymbol;
        }

        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("drawPyramid").appendChild(rowElem);
    }
}