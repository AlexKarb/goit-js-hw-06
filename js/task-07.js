

const fontSizeControler = document.querySelector('#font-size-control');
const textForChangingFontSize = document.querySelector("#text");




fontSizeControler.addEventListener('input', () => {
    const valueOfFontSize = fontSizeControler.value;
    textForChangingFontSize.style.fontSize = String(valueOfFontSize)+"px";

})

