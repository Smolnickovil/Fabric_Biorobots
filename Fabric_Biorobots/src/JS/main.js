'use strict'

const nCoins = document.querySelector('.numCoins');//-------Вывод монет числом
const quentityCoins = nCoins.textContent;
const imageCoins = document.querySelector('.coins');//------Вывод монет картинкой
const addCoins = imageCoins.innerHTML;

const checkbox = document.getElementById('addCheck');//статус чекбокса
let isChecked = checkbox.checked;

let priceElement;//Изменение кнопки покупки при отутствии денег
let editInstallBut;
let editButContent;
let contentPrEl;

//Изменение кнопки продажи
// let sellPriceElment;
let editSellBut;
let editSellButConten;
let quentityProductSell;
let contentQuentProd;



if(nCoins.textContent == ''){
    nCoins.textContent = 0;
}

function updateCoins (coinQuen){
  

    for(let i = 0; i<= coinQuen; i++){//цикл интерактивно показывающий количество монет
        if(i == 0){
        imageCoins.innerHTML = `
        `;
        } else {
        imageCoins.insertAdjacentHTML(
            'beforeend',
            `<img style = "margin-left: ${7 * i}px;  z-index: ${2-i};" class="money n${i}"  src="public/image/money.png" alt="">
            `
        );
        }
    }
}

function inpCheck() { //функции checbox
    if(isChecked == false){
      isChecked = true;
    } else if (isChecked == true){
      isChecked = false;
    }
    updateCoins(nCoins.textContent);
  }  

  //---Скролл кнопи в header
function navDown(){
    const moveDown = document.querySelector('.byToCoinsBut');
    moveDown.scrollIntoView({ 
      block: "center",
  
      behavior: "smooth"
    });
  }
  
updateCoins(quentityCoins);

  
