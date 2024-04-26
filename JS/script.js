window.addEventListener('DOMContentLoaded', () => {

//-----------------Matrix start-----------------------------------

const matrix = [];
for(let i = 0; i < 81; i++) {
    matrix.push([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}

const listElements = [];
for(let i = 0; i < 81; i++) {
    listElements.push([]);
}
let aaa = 0;
for( let i = 0; i < 81; i++) {   
    for( let key = 0; key < 9; key++) {
        listElements[i].push(aaa);
        aaa++;
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

function addingValueElements(arr, num) {
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

function rebootingMatrix() {
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

function deleteElementValues() {////////////////////////////////////////////////////////
    elements.forEach(item => {
        item.textContent = '';
    });
}
//----------------- end Creat elemets------------------------------------ 

//-------------------Task declaration------------------------------------

let index;

clusters.forEach((clr, i) => {
    clr.addEventListener('click', () => {
        index = i;
        reverClusterBg();
        pourClusterBg(i);
    });
    
});

function reverClusterBg() {
    clusters.forEach(clr => {
    clr.classList.remove('clusterBg');
    }); 
}

function pourClusterBg(i) {
    clusters[i].classList.add('clusterBg'); 
}   

function showCluster(k) {
    matrix.splice(index, 1, k);
    deleteElementValues();
    rebootingMatrix();
    clusters[index].style.cssText = 'width: 50px; height: 50px; font-size: 45px; display: flex; justify-content: center; align-items: center;';
    
}

    btnsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('button')) {
            btns.forEach((item, k) => {

                if (target == item) {
                    showCluster(k);  
                }               
            });               
        }
    });
//----------------End Task declaration------------------------------------     

 });



