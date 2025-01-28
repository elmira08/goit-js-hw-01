function getElementWidth(content, padding, border) {
    let contentN = Number.parseFloat(content);
    let paddingN = Number.parseFloat(padding);
    let borderN = Number.parseFloat(border);
    let width = contentN + paddingN * 2 + borderN * 2;
    return width;
} 
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
