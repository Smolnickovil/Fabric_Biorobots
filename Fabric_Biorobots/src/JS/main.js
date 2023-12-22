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
let editSellBut;
let editSellButConten;
let quentityProductSell;
let contentQuentProd;


if(nCoins.textContent == ''){
    nCoins.textContent = 0;
}

function updateCoins (coinQuen){
    // console.log(coinQue);
    for(let i = 1; i <= 3; i++){
        priceElement = document.querySelector(`#pr${i}`);
        editInstallBut = document.querySelector(`#inst${i}`);

        quentityProductSell = document.querySelector(`#quent${i}`);
        editSellBut = document.querySelector(`#sell${i}`)
        // editButContent = editInstallBut.outerHTML;
        contentPrEl = +priceElement.textContent;
        contentQuentProd = +quentityProductSell.textContent;
        // console.log(contentPrEl);

        if(coinQuen < contentPrEl){//если денег меньше чем цена, кнопка disabled
        editInstallBut.setAttribute('disabled', '');//делает кнопку неактивной setAtribut прописывает параметры в элемент
        } else{
        editInstallBut.removeAttribute('disabled');//делает кнопку неактивной setAtribut прописывает параметры в элемент
        }

        if(contentQuentProd <= 0){
        editSellBut.setAttribute('disabled', '');
        } else{
        editSellBut.removeAttribute('disabled');
        }
    }

    for(let i = 0; i <= coinQuen; i++){//цикл интерактивно показывающий количество монет
        if(i == 0){
        imageCoins.innerHTML = `
        `;
        } else {
            imageCoins.insertAdjacentHTML(
                'beforeend',
                `<img style = "margin-left: ${7 * i}px;  z-index: ${2-i};" class="money n${i}"  src="public/image/Money/money.png" alt="">
                `
            );
        }
    }
} 

function closeWind(){
    document.getElementsByClassName('upWind')[0].style.display = 'none';

}

function addCoinsBut() {
    if(isChecked == true){
      if(nCoins.textContent >= 96){
        for(let i = 1; i <= 4; i++){
          nCoins.textContent = (+nCoins.textContent) + 100 - (+nCoins.textContent);
        }

        document.getElementsByClassName('upWind')[0].style.display = 'flex';
        console.log('слишком много денег, больше 100 нельзя');
  
      } else {
        nCoins.textContent = (+nCoins.textContent) + 5; //price;
      }
    }
    updateCoins(nCoins.textContent);
}  

function inpCheck() { //функции checbox
    if(isChecked == false){
      isChecked = true;
    } else if (isChecked == true){
      isChecked = false;
    }
    updateCoins(nCoins.textContent);
  }
  
  function byPr(id) {//покупка
    const price = id.dataset.price;
    nCoins.textContent -= price; //price;
  
    //Здесь будем прибавлять на склад товар
    addStock(price,   nCoins.textContent);
  }

  function addStock(priceBy, nCoins) {//добавление товара в склад
    let addStockQuent;
    let butSel;
  
    for(let i = 1; i <= 3; i++) {
      addStockQuent = document.querySelector(`#quent${i}`);
      butSel = document.querySelector(`#sell${i}`)
      
      if((+priceBy) == (+butSel.dataset.price)){
        addStockQuent.textContent = (+addStockQuent.textContent) + 1;
      }
    }
  
    updateCoins(nCoins); 
  }

  //функции кнопки продать
function sellBut(sBut) {
  const byPrice = +sBut.dataset.price;
  let sellPrice;
 

  switch (byPrice) {
    case 7:
      quentityProductSell = document.querySelector('#quent1');
      sellPrice = 5;
      break;
    case 5:
      quentityProductSell = document.querySelector('#quent2');
      sellPrice = 3;
    break;
    case 25:
      quentityProductSell = document.querySelector('#quent3');
      sellPrice = 15;
      break;
  }

  console.log(byPrice);
  console.log(sellPrice);

  if((+nCoins.textContent) >= 100){
    document.getElementsByClassName('upWind')[0].style.display = 'flex';
    console.log('слишком много денег, больше 100 нельзя');

  } else {
    quentityProductSell.textContent = +(quentityProductSell.textContent) -1;

    if((+nCoins.textContent) >= 86) {
        nCoins.textContent = (+nCoins.textContent) + (100 - (+nCoins.textContent)); //price;
        
        document.getElementsByClassName('upWind')[0].style.display = 'flex';
        console.log('слишком много денег, больше 100 нельзя');
    }else{
    // console.log(quentityProductSell.textContent);
        nCoins.textContent = (+nCoins.textContent) + sellPrice; //price;
    }
  }
//   console.log(byPrice >= 86); 
  updateCoins(nCoins.textContent);
}

  //---Скролл кнопки в header
function navDown(){
    const moveDown = document.querySelector('.byToCoinsBut');
    moveDown.scrollIntoView({ 
      block: "center",
  
      behavior: "smooth"
    });
  }
  
updateCoins(quentityCoins);

  
