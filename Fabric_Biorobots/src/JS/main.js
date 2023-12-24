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

let addStockQuent;

//Изменение иконок запчастей при сборки робота

let sumSp = 0;
let detailsActiveArm;
let detailsActiveChip;
let detailsActiveSoul;

// console.log(quentProdS);
// productSelection();
function productSelection() {
    let quentProdSellArm;
    let quentProdSellChip;
    let quentProdSellSoul;

    let checkDetailsStatArm;
    let checkImageDitailsArm;
    let checkDetailsStatChip;
    let checkImageDitailsChip;
    let checkDetailsStatSoul;
    let checkImageDitailsSoul;


    // for(let i = 1; i <= 3; i++){
        quentProdSellArm = document.querySelector(`#quent1`).textContent;
        armProduction(quentProdSellArm, checkDetailsStatArm, checkImageDitailsArm);

        quentProdSellChip = document.querySelector(`#quent2`).textContent;
        chipProduction(quentProdSellChip, checkDetailsStatChip, checkImageDitailsChip);

        quentProdSellSoul = document.querySelector(`#quent3`).textContent;

        checkDetailsStatSoul = document.querySelector('#ch9');
        checkImageDitailsSoul = document.querySelector('#oneis9');

        if(quentProdSellSoul >= 1){
                checkDetailsStatSoul.removeAttribute('disabled');
                checkImageDitailsSoul.classList.remove('sp3Dis');
                // console.log('arm');
        } else {
            checkDetailsStatSoul.setAttribute('disabled', '');
            checkImageDitailsSoul.classList.add('sp3Dis');
        }

    // if(addStockArm) {
    //     quentProdSellArm = addStockArm;
    //     armProduction(quentProdSellArm);
    //     console.log(quentProdSellArm);
    // }
    // console.log(quentProdSellArm);

    // console.log(addStockArm);

        //---------------------вывоит колличество активированных 
        detailsActiveArm = 0;
        detailsActiveChip = 0;
        detailsActiveSoul = 0;

        for(let i = 1; i <= 9; i++){
            if(i <= 4) {
                detailsActiveArm += (+document.querySelector(`#ch${i}`).checked);
                // console.log('arm')
            } else if (i > 4 && i <= 8) {
                detailsActiveChip += (+document.querySelector(`#ch${i}`).checked);
                // console.log('chip')
            } else {
                detailsActiveSoul += (+document.querySelector(`#ch${i}`).checked);
            }
        }
        console.log(detailsActiveArm, detailsActiveChip, detailsActiveSoul);
        //-----------------------
    
    // updateCoins(nCoins.textContent);
}

function armProduction (quentProdSell, checkDetailsStatArm, checkImageDitailsArm){
    console.log('arm'+quentProdSell);

    if(((+quentProdSell) < 4)){ 
        sumSp = (4 - (+quentProdSell));

            for(let i = 1; i <= 4; i++){
                checkDetailsStatArm = document.querySelector(`#ch${i}`);
                checkImageDitailsArm = document.querySelector(`#oneis${i}`);

                if(checkImageDitailsArm.classList.contains('sp1Dis')){
                    checkDetailsStatArm.removeAttribute('disabled');
                    checkImageDitailsArm.classList.remove('sp1Dis');
                    // console.log('arm');
                }
            }

            for(let i = 4; i > (+quentProdSell); i--){
            checkDetailsStatArm = document.querySelector(`#ch${i}`);
            // console.log(sp);
            // checkImageDitails = document.querySelector(`#oneis${a}`).style.display = 'none';
            checkImageDitailsArm = document.querySelector(`#oneis${i}`);
                
            checkDetailsStatArm.setAttribute('disabled', '');
            checkImageDitailsArm.classList.add('sp1Dis');
            // if(checkImageDitails.classList.contains('sp1Dis')) console.log(checkImageDitails);
            // console.log(checkImageDitails);
        }

    } else {
        for(let i = 1; i <= 4; i++){
            checkDetailsStatArm = document.querySelector(`#ch${i}`);
            checkImageDitailsArm = document.querySelector(`#oneis${i}`);

            if(checkImageDitailsArm.classList.contains('sp1Dis')){
                checkDetailsStatArm.removeAttribute('disabled');
                checkImageDitailsArm.classList.remove('sp1Dis');
            }
            // console.log(document.querySelector('#ch1').checked);
        }
    }

}

function chipProduction (quentProdSell, checkDetailsStatChip, checkImageDitailsChip){
    console.log('chip'+quentProdSell);

    if(((+quentProdSell) < 4)){ 
        sumSp = (4 - (+quentProdSell));

        for(let i = 5; i <= 8; i++){
            checkDetailsStatChip = document.querySelector(`#ch${i}`);
            checkImageDitailsChip = document.querySelector(`#oneis${i}`);

            if(checkImageDitailsChip.classList.contains('sp2Dis')){
                checkDetailsStatChip.removeAttribute('disabled');
                checkImageDitailsChip.classList.remove('sp2Dis');
                // console.log('chip');
            }
        }

        for(let i = 8; i > ((+quentProdSell) + 4); i--){
            checkDetailsStatChip = document.querySelector(`#ch${i}`);
            checkImageDitailsChip = document.querySelector(`#oneis${i}`);

            checkImageDitailsChip.classList.add('sp2Dis');
            checkDetailsStatChip.setAttribute('disabled', '');
            // if(checkImageDitails.classList.contains('sp1Dis')) console.log(checkImageDitails);
            // console.log(checkImageDitails);
        }


    } else {
        for(let i = 8; i >= 5; i--){
            checkDetailsStatChip = document.querySelector(`#ch${i}`);
            checkImageDitailsChip = document.querySelector(`#oneis${i}`);

            if(checkImageDitailsChip.classList.contains('sp2Dis')){
                checkDetailsStatChip.removeAttribute('disabled');
                checkImageDitailsChip.classList.remove('sp2Dis');
            }
            // console.log(document.querySelector('#ch1').checked);
        }
    }

}

// for(let i = 1; i <= 4; i++){
//     sp = document.querySelector(`#ch${i}`);
//     spp = sp.checked;
    
// }
// que -= (4 - (+sumSp));
// console.log(que);
//------------------------

if(nCoins.textContent == ''){
    nCoins.textContent = 0;
};

function updateCoins (coinQuen, addStockProd){
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
        } else {
        editInstallBut.removeAttribute('disabled');//делает кнопку неактивной setAtribut прописывает параметры в элемент
        };

        if(contentQuentProd <= 0){
        editSellBut.setAttribute('disabled', '');
        } else {
        editSellBut.removeAttribute('disabled');
        };
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
        };
    }

    productSelection(); 
}

function radioinput(){
        let radTFront = document.querySelector(`#typeRob1`);
        let meaningT;
        let radGMale = document.querySelector(`#genRob1`);
        let meaningG;
        let robotImg = document.querySelector('.robot');

        if(radTFront.checked == true){
            meaningT = "frontent";

            if(radGMale.checked == true){
                meaningG = 'male';
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/3.svg" alt="">`;
            } else {
                meaningG = 'female';
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/4.svg" alt="">`;
            };

        } else {
            meaningT = "design";

            if(radGMale.checked){
                meaningG = 'male';
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/1-1.svg" alt="">`;
            } else {
                meaningG = 'female';
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/2.svg" alt="">`;
            };
        };

    updateCoins(nCoins.textContent);
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
      };
    };
    updateCoins(nCoins.textContent);
}  

function inpCheck() { //функции checbox
    if(isChecked == false){
      isChecked = true;
    } else if (isChecked == true){
      isChecked = false;
    };
    updateCoins(nCoins.textContent);
  }
  
  function byPr(id) {//покупка
    const price = id.dataset.price;
    nCoins.textContent -= price; //price;
  
    addStock(price,   nCoins.textContent);//Здесь будем прибавлять на склад товар
  }

  function addStock(priceBy, nCoins) {//добавление товара в склад
    let butSel;
  
    for(let i = 1; i <= 3; i++) {
      addStockQuent = document.querySelector(`#quent${i}`);
      butSel = document.querySelector(`#sell${i}`)
      
      if((+priceBy) == (+butSel.dataset.price)){
        addStockQuent.textContent = (+addStockQuent.textContent) + 1;
        //-------
        // productSelection(nCoins, addStockQuent.textContent);
        // if(addStockQuent = document.querySelector(`#quent1`)){
            updateCoins(nCoins); 
        // }        
        // console.log((+addStockQuent.textContent));
        //---------
      };
    }
    //--------------
    // productSelection(nCoins, (+addStockQuent.textContent));
    //--------------

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

//   console.log(byPrice);
//   console.log(sellPrice);

  if((+nCoins.textContent) >= 100){
    document.getElementsByClassName('upWind')[0].style.display = 'flex';
    console.log('слишком много денег, больше 100 нельзя');

  } else {
    quentityProductSell.textContent = +(quentityProductSell.textContent) -1;

    if((+nCoins.textContent) >= 86) {
        nCoins.textContent = (+nCoins.textContent) + (100 - (+nCoins.textContent)); //price;
        
        document.getElementsByClassName('upWind')[0].style.display = 'flex';
        console.log('слишком много денег, больше 100 нельзя');

    } else {

        nCoins.textContent = (+nCoins.textContent) + sellPrice; //price;
    };
  };
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
//   addStock();
updateCoins(quentityCoins);

  
