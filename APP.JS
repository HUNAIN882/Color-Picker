let colors = [`#F1f5f8`,`#fcdd99`,`#a3ffd5`,`#ff89a`,`#f2a4e0`,`#cff9a4`,`#f7a8f0`,`#ebffaf`,`#fcf8b3`,`#80f2b5`,`#fff`,`#ff6347`,`#a7f542`,`#9042f5`,`#4298f5`,`#42f566`]

document.getElementsByClassName('colorText')[0].innerHTML = colors[0];
document.body.style.backgroundColor = colors[0];

function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementsByClassName('colorText')[0].innerHTML = randomColor;
    document.body.style.backgroundColor = randomColor;
}