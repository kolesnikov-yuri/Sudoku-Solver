window.addEventListener('DOMContentLoaded', () => {

//-----------------Matrix start-----------------------------------

// Основной массив, задача - ответ
let matrix = [];
for(let i = 0; i < 81; i++) {
    matrix.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}

// Продолжение цикла решения задачи
let startCycle = false;

// Запись ходов
const recordingMoves = [];

function recordStepInMemory() {// Записать шаг в память
    let clon;
    clon = structuredClone(matrix);
    // clon = JSON.parse(JSON.stringify(matrix));
    recordingMoves.unshift(clon);
}

// Секторы
const sectorsMatrix = [];
createsListArray(sectorsMatrix, 9);

// Ряды
const rowsMatrix = [];
createsAnArrayGroup(rowsMatrix, 9);
let bbb = 0;
let ccc = 0;
let ddd = 0;
for(let a = 0; a < 3; a++) {
    for(let b = 0 + bbb; b < 3 + bbb; b++) {
        for(let c = 0 + ccc; c < 3 + ccc; c++) {
            for(let d = 0 + ddd; d < 3 + ddd; d++) {
                rowsMatrix[b].push(sectorsMatrix[c][d]);  
            }
        }
        ddd += 3;
    }
    bbb += 3;
    ccc += 3;
    ddd = 0;
}

// Столбцы
const colomnsMatrix = [];
createsAnArrayGroup(colomnsMatrix, 9);
bbb = 0;
ccc = 0;
ddd = 0;
for(let a = 0; a < 3; a++) {
    for(let b = 0 + bbb; b < 3 + bbb; b++) {
        for(let c = 0 + ccc; c < 9; c += 3) {
            for(let d = 0 + ddd; d < 9; d += 3) {
                colomnsMatrix[b].push(sectorsMatrix[c][d]);  
            }    
        }
        ddd += 1;
    }
    bbb += 3;
    ccc += 1;
    ddd = 0;
}

const arrObjectsMatrix = [sectorsMatrix, rowsMatrix, colomnsMatrix];

function createsAnArrayGroup(item, e) {// Создает группу массивов
    for(let i = 0; i < e; i++) {
        item.push([]);
    }
}

function createsListArray(item, e) {// Создает список в массиве
    createsAnArrayGroup(item, e);
    let numberIsInOrder = 0;
    for( let i = 0; i < e; i++) {   
        for( let key = 0; key < 9; key++) {
            item[i].push(numberIsInOrder);
            numberIsInOrder++;
        }
    }
}
//-----------------Matrix end-----------------------------------

//-----------------Creat elemets----------------------------------- 

const body = document.querySelector('body');
const main = document.createElement('main');
main.classList.add('main');
body.prepend(main);

const field = document.createElement('div');
field.classList.add('field');
main.append(field);

const row = "row";
addBlocks(field, 3, row);
const rows = document.querySelectorAll('.row');

const sector = "sector";
inEveryAddThreeBlocks(rows, sector);
const sectors = document.querySelectorAll('.sector');

const row_cluster = "row_cluster";
inEveryAddThreeBlocks(sectors, row_cluster);
const row_clusters = document.querySelectorAll('.row_cluster');
addClassToEveryone(row_clusters, row);

const cluster = "cluster";
inEveryAddThreeBlocks(row_clusters, cluster);
const clusters = document.querySelectorAll('.cluster');

const classButtons = "buttons";
addBlocks(main, 1, classButtons);
const btnsParent = document.querySelector('.buttons');

const button = "button";
addBlocks(btnsParent, 10, button);
const btns = document.querySelectorAll('.button');

const buttonStart = "button_start";
addBlocks(main, 1, buttonStart);
const START = document.querySelector('.button_start');
START.textContent = 'start';

btns.forEach((item, i) => {
    item.textContent = i;
});

rebootingMatrix();

//------------------
// Функции помогающие создать HTML

function addClassToEveryone(what, ename) {
    what.forEach(item => {
        item.classList.add(`${ename}`);
    });
}

function inEveryAddThreeBlocks(where, ename) {
    where.forEach(item => {
        addBlocks(item, 3, ename);
    });
}

function addBlocks(where, quan, ename) {
    for(let i = 0; i < quan; i++) {
        where.insertAdjacentHTML("beforeend", `<div class="${ename}"></div>`);
    }
}

//------------------

function addingValueElements(arr, num) {// Вставляет значение элементов из матрицы
    let score = 0;
    arr.forEach(item => {
        for(let i = 1; i < item - score; i++) {
            num.insertAdjacentHTML("beforeend", '<div class="element"></div>');
        }
        score = item;
        num.insertAdjacentHTML("beforeend", `<div class="element">${item}</div>`);
    });
}


function rebootingMatrix() {// Перезагружает изображение матрицы
    for(let i = 0; i < matrix.length; i++) {
        if(typeof matrix[i] == 'number') {
            clusters[i].classList.add('value_cluster');            
            clusters[i].innerHTML = matrix[i]; 
        } else if(Array.isArray(matrix[i])) {
            clusters[i].classList.remove('value_cluster');
            clusters[i].textContent = '';
            addingValueElements(matrix[i], clusters[i]);
        } else {
            alert("какая то ошибка");
        }
    }
}

//----------------- end Creat elemets------------------------------------ 

//-------------------Task declaration------------------------------------

let index;// Курсор на поле

clusters.forEach((clr, i) => {// Курсор на поле
    clr.addEventListener('click', () => {
        index = i;
        reverClusterBg();
        pourClusterBg(i);
    });
    
});

btnsParent.addEventListener('click', (event) => {// Активные кнопки
    const target = event.target;
    if (target && target.classList.contains('button')) {
        btns.forEach((item, k) => {
            if (target == item) {
                if (k === 0) {
                    cancelingLastAction();
                } else {checkingError(k);}                  
            }               
        });               
    }
});

function reverClusterBg() {// Курсор на поле
    clusters.forEach(clr => {
    clr.classList.remove('clusterBg');
    }); 
}

function pourClusterBg(i) {// Курсор на поле
    clusters[i].classList.add('clusterBg'); 
}   

function showCluster(k) {// Вставляет цифры в кластеры
    recordStepInMemory();
    removingNonStandardValues(k); 
    matrix.splice(index, 1, k);
    rebootingMatrix();
    if(startCycle == true) {solvingTask();}    
}

function checkingError(k) {// Проверяет возможность установки цифры в кластер
    if(Array.isArray(matrix[index])) {
        if(matrix[index].includes(k)) {
            showCluster(k);         
        } else {
            alert("Этого числа не может быть сдесь");
        }
    } else if(typeof matrix[index] == 'number') {
        alert('Если ошиблись, нажмите шаг назад "0"');
    } else {
        alert("ошибка почему то");
    }
}

function removingNonStandardValues(k) {// Удаляет недопустимые элементы из матрицы
    arrObjectsMatrix.forEach(item => {
        item.forEach(elem => {
            if(elem.includes(index)) {
                elem.forEach(e => {
                    if(Array.isArray(matrix[[e]])) {
                        if(matrix[e].includes(k)) {    
                            matrix[e].splice(matrix[e].indexOf(k), 1);
                        }
                    }
                });
            }
        });
    });    
}

function cancelingLastAction() {// отменяем последнее действие
    if(recordingMoves.length == 0) {
        alert('вы в начальной точке сохранения');
    } else {
        matrix = recordingMoves[0];
        recordingMoves.shift();
        rebootingMatrix();
    }
}

//----------------End Task declaration------------------------------------   

//----------------Decision-------------------------------------------------

let cycleCounter = 0;

START.addEventListener('click', () => {
    console.log('start');
    startCycle = true;
    solvingTask();
});

function solvingTask() {
    console.log("Счет цикла:  ", cycleCounter);
    cycleCounter += 1;
    checkingForReadiness();
}

function checkingForReadiness() {// Проверям на готовность
    for(let i = 0; i < 81; i++) {
        if(Array.isArray(matrix[i])) {
            searchingSingularNumberInCluster();
            break;
        } else if(i == 80) {
            console.log("ГОТОВО");
            break;
        }
    }
}

function searchingSingularNumberInCluster() {// Поиск единственного числа в класторе
    for(let i = 0; i < 81; i++) {
        if(matrix[i].length == 0) {
            console.log("Ошибка! Поиск единственного числа в класторе. Такая комбинация матрицы невозможна.");
            break;
        } else if(matrix[i].length == 1) {
            index = i;
            checkingError(matrix[i][0]);
            break;
        } else if(matrix[i].length > 1 && i == 80) {
            // searchingSingularNumberInObject();
            aaa();
        }
    }
}

console.log("sectorsMatrix", sectorsMatrix);//////////////////////////////////////////////////


//////////////////////Не работает///////////////////////////////

// function searchingSingularNumberInObject() {// Поиск единственного числа в объекте

//     let aaa;
//     let sss;
//     let key;

//     aaa = [];
//     sss = 0;
    

//     for(let a = 0; a < 3; a++) {// перебирает типы

//         for(let b = 0; b < 9; b++) {// перебирает объекты

//             for(let c = 0; c < 9; c++) {// собирает массив объекта для проверки
//                 aaa.push(matrix[arrObjectsMatrix[a][b][c]]);
//             }
            
//             for(key = 1; key < 10; key++) {// переберет все цифры -кey-
//                 if(aaa.includes(key)) {
//                     // console.log("есть такая цифра, прервать цикл");
//                     continue;
//                 } else {
//                     for(let d = 0; d < 9; d++) { // посчитает во сколько  -к- в массивах
//                         if(Array.isArray(aaa[d])) {
//                             if(aaa[d].includes(key)) {
//                                 sss += 1;
//                             }
//                         }
//                     }
//                 }
//                 console.log("sss", sss);
//                 if(sss == 1) {
//                     sss = 0;
//                     for(let e = 0; e < 9; e++) {// это завершит, вставит цифру в случае удачного поиска
//                         if(Array.isArray(aaa[e])) {
//                             if(aaa[e].includes(key)) {
//                                 index = arrObjectsMatrix[a][b][e];
//                                 checkingError(key);
//                             }   
//                         }
//                     }
//                 } else if(sss == 0) {
//                     console.log(`непонятно, ошибка , цифра ${key} отсутствует`);
//                 } else if(sss > 1 && sss < 9) {
//                     console.log('норма');
//                 } else {
//                     console.log('вообще не понятно');
//                 }
//                 sss = 0;
//             }
//             aaa = [];
//         }
//     }    
// }
//-------------------------------
let arrayBeingChecked;                              // Проверяемый массив

function aaa() {
    for(let i = 0; i < 3; i++) {
        for(let a = 0; a < 9; a++) {
            arrayBeingChecked = arrObjectsMatrix[i][a];
            findsSingularNumberInObject();
        }
    }
}

function findsSingularNumberInObject(){                 // находит единственное число в объекте
    for(let key = 1; key < 10; key++) {
        let counter = 0;                               // Счетчик совпадений
        if(arrayBeingChecked.includes(key)) {
            continue;
        } else {
            for(let i = 0; i < 9; i++) {
                if(Array.isArray(arrayBeingChecked[i])) {
                    if(arrayBeingChecked[i].includes(key)) {
                        counter++;
                    }
                }
            }
        }
        if(counter === 0) {
            console.log(`Fn findsSingularNumberInObject. Ошибка. Отсутствует искомое число ${key} в класторах ${arrayBeingChecked}`);
        }  else if(counter > 1 && counter < 9) {
            continue;
        } else if(counter > 8) {
            console.log(`Fn findsSingularNumberInObject. Ошибка. Невозможное количество совпадений в класторах ${arrayBeingChecked}`);
        } else if(counter === 1) {
            for(let i = 0; i < 9; i++) {                     // это завершит и вставит цифру в случае удачного поиска
                lookingRightArray(key, checkingError);
                if(Array.isArray(arrayBeingChecked[i])) {
                    if(arrayBeingChecked[i].includes(key)) {
                        index = arrayBeingChecked[i];
                        checkingError(key);
                        break;
                    }   
                }
            }
        } else {
            console.log('Fn findsSingularNumberInObject. Ошибка. Совсем что то непонятное');
        }
    }  
}






console.log(`Цикл проверок закончен. Проведенно циклов: ${cycleCounter}`);


//----------------End decision-------------------------------------------------

 });


