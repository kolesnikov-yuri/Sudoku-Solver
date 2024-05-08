window.addEventListener('DOMContentLoaded', () => {

//-----------------Matrix start-----------------------------------

// Основной массив, задача - ответ
let matrix = [];////////////////////////////////////////////let
for(let i = 0; i < 81; i++) {
    matrix.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}

// Запись ходов
const recordingMoves = [];

// Список элементов для отображения матрицы на экране
const listElements = [];
createsListArray(listElements, 81);

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

////////////////////////////////////////////////////////////////////////
console.log("matrix", matrix);
console.log("listElements", listElements);
console.log("sectorsMatrix", sectorsMatrix);
console.log("rowsMatrix", rowsMatrix);
console.log("colomnsMatrix", colomnsMatrix);
/////////////////////////////////////////////////////////////////////////

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
const main = document.createElement('div');
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

const row_element = "row_element";
inEveryAddThreeBlocks(clusters, row_element);
const allRows_elements = document.querySelectorAll('.row_element');
addClassToEveryone(allRows_elements, row);

const element = "element";
inEveryAddThreeBlocks(allRows_elements, element);
const elements = document.querySelectorAll('.element');

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

function addingValueElements(arr, num) {// Встасляет значение элементов из матрицы
    for(let i = 0; i < arr.length; i++) {
        switch(arr[i]) {
            case 1:
                elements[num[0]].textContent = 1;
                break;
            case 2:
                elements[num[1]].textContent = 2;
                break;
            case 3:
                elements[num[2]].textContent = 3;
                break;
            case 4:
                elements[num[3]].textContent = 4;
                break;
            case 5:
                elements[num[4]].textContent = 5;
                break;
            case 6:
                elements[num[5]].textContent = 6;
                break;
            case 7:
                elements[num[6]].textContent = 7;
                break;
            case 8:
                elements[num[7]].textContent = 8;
                break;
            case 9:
                elements[num[8]].textContent = 9;
                break;
        } 
    }
}

function rebootingMatrix() {// Перезагружает изображение матрицы
    for(let i = 0; i < matrix.length; i++) {
        if(typeof matrix[i] == 'number') {
            clusters[i].classList.add('value_cluster');            
            clusters[i].innerHTML = matrix[i]; 
        } else if(Array.isArray(matrix[i])) {
            addingValueElements(matrix[i], listElements[i]);
        } else {
            alert("какая то ошибка");
        }
    }
}

function deleteElementValues() {// Удаляет значение элементов
    elements.forEach(item => {
        item.textContent = '';
    });
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

function showCluster(k) {// Вставляет цифры в кластеры/////////////////////////////////////////////////////
    aaaxxx();/////////////////////////////////////// 
    matrix.splice(index, 1, k);
    deleteElementValues();
    rebootingMatrix();    
}

function checkingError(k) {// Проверяет возможность установки цифры в кластер
    if(Array.isArray(matrix[index])) {
        if(matrix[index].includes(k)) {
            removingNonStandardValues(k);
            showCluster(k);         
        } else {
            alert("Этого числа не может быть сдесь");
        }
    } else if(typeof matrix[index] == 'number') {////////////////////////////////////////////////////////////
        alert('Если ошиблись, нажмите шаг назад "0" или начните заново');
    } else {
        alert("ошибка почему то");
    }
}

function cancelingLastAction() {// отменяем последнее действие
    matrix = recordingMoves[0];
    recordingMoves.shift();
    rebootingMatrix();
    console.log(matrix);
}

//----------------End Task declaration------------------------------------   

//----------------Decision-------------------------------------------------

// function removingNonStandardValues(k) {// Удаляет недопустимые элементы из матрицы
//     let arr = [sectorsMatrix, rowsMatrix, colomnsMatrix];
//     for(let b = 0; b < 3; b++) {
//         for(let i = 0; i < arr[b].length; i++) {
//             if(arr[b][i].includes(index)) {
//                 for(let a = 0; a < arr[b][i].length; a++) {
//                     if(Array.isArray(matrix[[arr[b][i][a]]])) {
//                         if(matrix[arr[b][i][a]].includes(k)) {    
//                             matrix[arr[b][i][a]].splice(matrix[arr[b][i][a]].indexOf(k), 1);
//                         }
//                     }
//                 }
//             }
//         }
//     }    
// }
function removingNonStandardValues(k) {// Удаляет недопустимые элементы из матрицы
    let arr = [sectorsMatrix, rowsMatrix, colomnsMatrix];
    arr.forEach(item => {
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


function aaaxxx() {
    let clon;
    clon = [...matrix];
    recordingMoves.unshift(clon);
}


START.addEventListener('click', () => {
    console.log('start');
    solvingProblem();
});

function solvingProblem() {
    
    
    console.log(recordingMoves);
}


//----------------End decision-------------------------------------------------

 });



