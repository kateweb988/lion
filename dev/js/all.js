document.addEventListener("DOMContentLoaded", () => {
});
//popup
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});
//accordeon
var accordeonButtons = document.getElementsByClassName("accordeon__button");

//пишем событие при клике на кнопки - вызов функции toggle
for(var i = 0; i < accordeonButtons.length; i++) {
    var accordeonButton = accordeonButtons[i];

    accordeonButton.addEventListener("click", toggleItems, false);
}

//пишем функцию
function toggleItems() {

    // переменная кнопки(актульная) с классом
    var itemClass = this.className;

    // добавляем всем кнопкам класс close
    for(var i = 0; i < accordeonButtons.length; i++) {
        accordeonButtons[i].className = "accordeon__button closed";
    }

    // закрываем все открытые панели с текстом
    var pannels = document.getElementsByClassName("accordeon__panel");
    for (var z = 0; z < pannels.length; z++) {
        pannels[z].style.maxHeight = 0;
    }

    // проверка. если кнопка имеет класс close при нажатии
    // к актуальной(нажатой) кнопке добававляем активный класс
    // а панели - которая находится рядом задаем высоту
    if(itemClass == "accordeon__button closed") {
        this.className = "accordeon__button active";
        var panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

}
let popupBg2 = document.querySelector('.popup__bg2');
let popup2 = document.querySelector('.popup2');
let openPopupButtons2 = document.querySelectorAll('.open-popup2');
let closePopupButton2 = document.querySelector('.close-popup2');

openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg2.classList.add('active');
        popup2.classList.add('active');
    })
});

closePopupButton2.addEventListener('click',() => {
    popupBg2.classList.remove('active');
    popup2.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg2) {
        popupBg2.classList.remove('active');
        popup2.classList.remove('active');
    }
});