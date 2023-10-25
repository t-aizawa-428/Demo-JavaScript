const text = document.querySelector('#colorText');
console.log(text.value)
const color = document.querySelector('#colorPicker');
console.log(color.value)

//カラーピッカーを操作したあとの一連の動作
const colorBg = () => {
    //選択した色を背景色に設定
    document.body.style.backgroundColor = color.value;

    // カラーコード表示
if (color.value == '#ffffff') {
    text.textContent = `カラーコード:${color.value} (while)`;
    console.log(color.value)
} else {
    text.textContent = `カラーコード:${color.value}`;
    console.log(color.value)
}


}

color.addEventListener('input', colorBg)