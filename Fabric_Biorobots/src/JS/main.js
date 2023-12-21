'use strict'

const nCoins = document.querySelector('.numCoins');//-------Вывод монет числом
const quentityCoins = nCoins.textContent;
const imageCoins = document.querySelector('.coins');//------Вывод монет картинкой
const addCoins = imageCoins.innerHTML;

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

  updateCoins(quentityCoins);

  
