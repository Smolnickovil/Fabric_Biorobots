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

//для кнопки создать робота за 10 монет
const creatRoboBut = document.querySelector('.byToCoinsBut');

//Изменение иконок запчастей при сборки робота
let sumSp = 0;
let detailsActiveArm;
let detailsActiveChip;
let detailsActiveSoul;
//------
let quentProdSellArm;
let quentProdSellChip;
let quentProdSellSoul;
//-------

function updateData (coinQuen, addStockProd){

    for(let i = 1; i <= 3; i++){
        priceElement = document.querySelector(`#pr${i}`);
        editInstallBut = document.querySelector(`#inst${i}`);

        quentityProductSell = document.querySelector(`#quent${i}`);
        editSellBut = document.querySelector(`#sell${i}`)

        contentPrEl = +priceElement.textContent;
        contentQuentProd = +quentityProductSell.textContent;

        if(coinQuen < contentPrEl){//если денег меньше чем цена, кнопка disabled
        editInstallBut.setAttribute('disabled', '');//делает кнопку неактивной setAtribut прописывает параметры в элемент
        } else {
        editInstallBut.removeAttribute('disabled');//делает кнопку активной прописывает параметры в элемент
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
}

function closeWind(){
    document.getElementsByClassName('upWind')[0].style.display = 'none';
}

function closeGoodCreat(){
    document.getElementsByClassName('upGoodCreat')[0].style.display = 'none';
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
    // createRobo();
    productSelection();
    // updateData(nCoins.textContent);
}  

function inpCheck() { //функция checbox
    if(isChecked == false){
      isChecked = true;
    } else if (isChecked == true){
      isChecked = false;
    };
    updateData(nCoins.textContent);
  }
  
  function byPr(id) {//покупка
    const price = id.dataset.price;
    nCoins.textContent -= price; //price;
  
    addStock(price, nCoins.textContent);//Здесь будем прибавлять на склад товар
  }

  function addStock(priceBy, nCoins) {//добавление товара в склад
    let butSel;
  
    for(let i = 1; i <= 3; i++) {
      addStockQuent = document.querySelector(`#quent${i}`);
      butSel = document.querySelector(`#sell${i}`)
      
      if((+priceBy) == (+butSel.dataset.price)){
        addStockQuent.textContent = (+addStockQuent.textContent) + 1;
        productSelection();
        updateData(nCoins); 
      };
    }

  }

//функция кнопки продать
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
  productSelection();
  updateData(nCoins.textContent);
}

function radioinput(){ //функция изменения робота при выборе пола и т.д.
    let radTFront = document.querySelector(`#typeRob1`);
    let meaningT;
    let radGMale = document.querySelector(`#genRob1`);
    let meaningG;
    let robotImg = document.querySelector('.robot');
    // console.log(quentProdSellArm.textContent);
    // console.log(detailsActiveArm);
    // console.log(detailsActiveChip);
    let summDet = detailsActiveArm + detailsActiveChip + detailsActiveSoul;
    console.log('RadioImp', summDet);

    if(radTFront.checked == true){
        meaningT = "frontent";

        if(radGMale.checked == true){
            meaningG = 'male';
            if(quentProdSellArm.textContent < 4 || quentProdSellChip < 4 || quentProdSellSoul < 1){
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/3.svg" alt="">`;
            } else {
                if(summDet < 9) {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/33.svg" alt="">`;
                } else {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/Front Male 1.svg" alt="">`;
                }
            }
            
        } else {
            meaningG = 'female';
            if(quentProdSellArm.textContent < 4 || quentProdSellChip < 4 || quentProdSellSoul < 1){
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/2.svg" alt="">`;
            } else {
                if(summDet < 9) {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/44.svg" alt="">`;
                } else {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/Front Famale 1.svg" alt="">`;
                }
            }
        };

    } else {
        meaningT = "design";

        if(radGMale.checked){
            meaningG = 'male';

            if(quentProdSellArm.textContent < 4 || quentProdSellChip < 4 || quentProdSellSoul < 1){
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/1-1.svg" alt="">`;
            } else {
                if(summDet < 9) {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/1.svg" alt="">`;
                } else {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/Designer Male 1.svg" alt="">`;
                }
        }
        } else {
            meaningG = 'female';

            if(quentProdSellArm.textContent < 4 || quentProdSellChip < 4 || quentProdSellSoul < 1){
                robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/4.svg" alt="">`;
                } else {
                if(summDet < 9) {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/22.svg" alt="">`;
                } else {
                    robotImg.outerHTML = `<img class="robot" src="image/Biorobots _ Тестовое задание _ ATW/Designer Famale 1.svg" alt="">`;
                }
            }
        };
    };
// productSelection();
updateData(nCoins.textContent);
}

function productSelection() {
    let checkDetailsStatArm;
    let checkImageDitailsArm;
    let checkDetailsStatChip;
    let checkImageDitailsChip;
    let checkDetailsStatSoul;
    let checkImageDitailsSoul;

    quentProdSellArm = document.querySelector(`#quent1`).textContent;
    armProduction(quentProdSellArm, checkDetailsStatArm);

    quentProdSellChip = document.querySelector(`#quent2`).textContent;
    chipProduction(quentProdSellChip, checkDetailsStatChip, checkImageDitailsChip);

    quentProdSellSoul = document.querySelector(`#quent3`).textContent;

    checkDetailsStatSoul = document.querySelector('#ch9');
    checkImageDitailsSoul = document.querySelector('#oneis9');

    if(quentProdSellSoul >= 1){
            checkDetailsStatSoul.removeAttribute('disabled');
            checkImageDitailsSoul.classList.remove('sp3Dis');
    } else {
        checkDetailsStatSoul.setAttribute('disabled', '');
        checkImageDitailsSoul.classList.add('sp3Dis');
    }

    detailsActiveArm = 0;//вывоит колличество активированных 
    detailsActiveChip = 0;
    detailsActiveSoul = 0;
    for(let i = 1; i <= 9; i++){
        if(i <= 4) {
            detailsActiveArm += (+document.getElementById(`ch${i}`).checked);
        } else if (i > 4 && i <= 8) {
            detailsActiveChip += (+document.getElementById(`ch${i}`).checked);
        } else {
            detailsActiveSoul += (+document.getElementById(`ch${i}`).checked);
        }
    }

    for(let a = 1; a <=9; a++){//отключение активных, если перед продажей запчастей были активны
        if(a <= 4) {
            checkImageDitailsArm = document.querySelector(`#oneis${a}`);
            if (checkImageDitailsArm.classList.contains('sp1Dis') && document.querySelector(`#ch${a}`).checked) {
                detailsActiveArm -= 1;
                document.getElementById(`ch${a}`).checked = false;
            }
        
        }   
        if (a > 4 && a <=8) {
            checkImageDitailsChip = document.querySelector(`#oneis${a}`);
            if (checkImageDitailsChip.classList.contains('sp2Dis') && document.querySelector(`#ch${a}`).checked) {
                detailsActiveChip -= 1;
                document.getElementById(`ch${a}`).checked = false;
            }
        }
        else{
            checkImageDitailsSoul = document.querySelector(`#oneis${a}`);
            if (checkImageDitailsSoul.classList.contains('sp3Dis')  && document.querySelector(`#ch${a}`).checked) {
                detailsActiveSoul -= 1;
                document.getElementById(`ch${a}`).checked = false;
            }
        }

    }

    console.log(detailsActiveArm, detailsActiveChip, detailsActiveSoul);
    
    //Здесь уведомление о нехватки для покупки
    let notify = document.querySelector('.notification');

    let notiArm = 4 - detailsActiveArm;
    let notiChip = 4 - detailsActiveChip;
    let notiSoul = 1 - detailsActiveSoul;
    let nCoinsAbset = 10 - (+nCoins.textContent);

    if(notiChip == 0 && notiSoul == 0 && notiArm == 0 && nCoinsAbset == 0){
        notify.innerHTML = `Для производства биоробота хватает всего`;
    } else {
        notify.innerHTML = `Для производства биоробота не хватает`;

        if(notiChip > 0 && notiSoul > 0 && notiArm > 0 && nCoinsAbset > 0){
            notify.innerHTML += ` ${notiArm} биоруки, <br>${notiChip} микрочипа, ${notiSoul} души и ${nCoinsAbset} монет`;
        } else{
            if(notiChip > 0 && notiSoul > 0 && notiArm > 0){
                notify.innerHTML += ` ${notiArm} биоруки, <br>${notiChip} микрочипа и ${notiSoul} души`;
            } else if(notiChip > 0 && notiSoul > 0 && nCoinsAbset > 0) {
                notify.innerHTML += ` ${notiChip} микрочипа, <br>${notiSoul} души и ${nCoinsAbset} монет`;
            } else if(notiArm > 0 && notiSoul > 0 && nCoinsAbset > 0) {
                notify.innerHTML += ` ${notiArm} биоруки, <br>${notiSoul} души и ${nCoinsAbset} монет`;
            } else if(notiArm > 0 && notiChip > 0 && nCoinsAbset > 0) {
                notify.innerHTML += ` ${notiArm} биоруки, <br>${notiChip} микрочипа и ${nCoinsAbset} монет`;
            }
            else {
                if(notiChip > 0 && notiSoul > 0){
                    notify.innerHTML += ` ${notiChip} микрочипа <br>и ${notiSoul} души`;
                } else if(notiArm > 0 && notiSoul > 0){
                    notify.innerHTML += ` ${notiArm} биоруки <br>и ${notiSoul} души`;
                } else if(notiArm > 0 && notiChip > 0){
                    notify.innerHTML += ` ${notiArm} биоруки <br>и ${notiChip} микрочипа`;
                } else if(notiArm > 0 && nCoinsAbset > 0){
                    notify.innerHTML += ` ${notiArm} биоруки <br>и ${nCoinsAbset} монет`;
                } else if (notiChip > 0 && nCoinsAbset > 0) {
                    notify.innerHTML += ` ${notiChip} микрочипа <br>и ${nCoinsAbset} монет`;
                } else if(nCoinsAbset > 0 && notiSoul > 0) {
                    notify.innerHTML += ` ${notiSoul} души <br>и ${nCoinsAbset} монет`;
                }
                else{
                    if(notiArm > 0){
                        notify.innerHTML += ` ${notiArm} биоруки, <br>`;
                    }
                    if(notiChip > 0){
                        notify.innerHTML += ` ${notiChip} микрочипа`;
                    }
                    if(notiSoul > 0){
                        notify.innerHTML += ` ${notiSoul} души`;
                    }
                    if(nCoinsAbset > 0){
                        notify.innerHTML += ` ${nCoinsAbset} монет`;
                    }
                }
            }
        }
    }
    createRobo();
    radioinput()
    // updateData(nCoins.textContent);
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
            }
        }

        for(let i = 4; i > (+quentProdSell); i--){
        checkDetailsStatArm = document.querySelector(`#ch${i}`);
        checkImageDitailsArm = document.querySelector(`#oneis${i}`);
            
        checkDetailsStatArm.setAttribute('disabled', '');
        checkImageDitailsArm.classList.add('sp1Dis');
        }

    } else {
        for(let i = 1; i <= 4; i++){
            checkDetailsStatArm = document.querySelector(`#ch${i}`);
            checkImageDitailsArm = document.querySelector(`#oneis${i}`);

            if(checkImageDitailsArm.classList.contains('sp1Dis')){
                checkDetailsStatArm.removeAttribute('disabled');
                checkImageDitailsArm.classList.remove('sp1Dis');
            }
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
            }
        }

        for(let i = 8; i > ((+quentProdSell) + 4); i--){
            checkDetailsStatChip = document.querySelector(`#ch${i}`);
            checkImageDitailsChip = document.querySelector(`#oneis${i}`);

            checkImageDitailsChip.classList.add('sp2Dis');
            checkDetailsStatChip.setAttribute('disabled', '');
        }


    } else {
        for(let i = 8; i >= 5; i--){
            checkDetailsStatChip = document.querySelector(`#ch${i}`);
            checkImageDitailsChip = document.querySelector(`#oneis${i}`);

            if(checkImageDitailsChip.classList.contains('sp2Dis')){
                checkDetailsStatChip.removeAttribute('disabled');
                checkImageDitailsChip.classList.remove('sp2Dis');
            }
        }
    }

}

//произвести робота
function createRobo() {
    console.log(detailsActiveArm, detailsActiveChip, detailsActiveSoul); 
    let sumDetails =  detailsActiveArm + detailsActiveChip + detailsActiveSoul;
    const money = document.querySelector('.numCoins').textContent;

    creatRoboBut.setAttribute('disabled', '')
    // but.setAttribute('disabled', '');
    console.log(sumDetails);

    console.log('Money:' +money);
    if(sumDetails == 9 && (+money) >= 10){
        creatRoboBut.removeAttribute('disabled');
        // creatRoboBut.document.addEventListener('click', goodCreatRobo);
    }
}

function goodCreatRobo(){
    document.getElementsByClassName('upGoodCreat')[0].style.display = 'flex';

    document.querySelector('#quent1').textContent -= 4;
    document.querySelector('#quent2').textContent -= 4;
    document.querySelector('#quent3').textContent -= 1;
    document.querySelector('.numCoins').textContent -= 10;



    productSelection();
    updateData(nCoins.textContent);
}



//Скролл кнопки в header
function navDown(){
    const moveDown = document.querySelector('.byToCoinsBut');
    moveDown.scrollIntoView({ 
      block: "center",
  
      behavior: "smooth"
    });
  }
createRobo();
productSelection();
updateData(quentityCoins);

  
