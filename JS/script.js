window.addEventListener('DOMContentLoaded', () => {

//-------------Inner HTML------------------------

    const main = document.querySelector('.main');
    main.innerHTML = `
    <div class ="field">
        <div class ="row row_sectors_s"></div>
        <div class ="row row_sectors_s"></div>
        <div class ="row row_sectors_s"></div>
    </div>
    <div class ="buttons"></div>
    <div class="button_start">start</div>
    `;

    const btnsParent = document.querySelector('.buttons');
    const rowSectors = document.querySelectorAll('.row_sectors_s');
    rowSectors.forEach((rowSector) => {
        rowSector.innerHTML =  `
            <div class ="sector"></div>
            <div class ="sector"></div>
            <div class ="sector"></div>
        `;
    }); 

    const sectors = document.querySelectorAll('.sector');
    sectors.forEach((sector) => {
        sector.innerHTML =`
            <div class ="row row_cluster"></div>
            <div class ="row row_cluster"></div>
            <div class ="row row_cluster"></div>
        `;
    });

    const rowClusters = document.querySelectorAll('.row_cluster');
    rowClusters.forEach((rowCluster) => {
        rowCluster.innerHTML = `
            <div class ="cluster"></div>
            <div class ="cluster"></div>
            <div class ="cluster"></div>
        `;
    });

    function innerHtmlCluster(i) {
        cluster[i].innerHTML = `
        <div class="cluster_elements">
            <div class="row row_elements row_elements_1">
                <div class="element element_1">
                    <p class="element_value element_value_1">${clusterNum.b}</p>
                </div>
                <div class="element element_2">
                    <p class="element_value element_value_2">${clusterNum.c}</p>
                </div>
                <div class="element element_3">
                    <p class="element_value element_value_3">${clusterNum.d}</p>
                </div>
            </div>
            <div class="row row_elements row_elements_2">
                <div class="element element_4">
                    <p class="element_value element_value_4">${clusterNum.e}</p>
                </div>
                <div class="element element_5">
                    <p class="element_value element_value_5">${clusterNum.f}</p>
                </div>
                <div class="element element_6">
                    <p class="element_value element_value_6">${clusterNum.g}</p>
                </div>
            </div>
            <div class="row row_elements row_elements_3">
                <div class="element element_7">
                    <p class="element_value element_value_7">${clusterNum.h}</p>
                </div>
                <div class="element element_8">
                    <p class="element_value element_value_8">${clusterNum.i}</p>
                </div>
                <div class="element element_9">
                    <p class="element_value element_value_9">${clusterNum.j}</p>
                </div>
            </div>
        </div>
        `;
    }
    btnsParent.innerHTML = `
        <div class ="button">0</div>
        <div class ="button">1</div>
        <div class ="button">2</div>
        <div class ="button">3</div>
        <div class ="button">4</div>
        <div class ="button">5</div>
        <div class ="button">6</div>
        <div class ="button">7</div>
        <div class ="button">8</div>
        <div class ="button">9</div>
    `;

    // let a;
    // for (a = 0; a < 10; a++) {
    //     btnsParent.innerHTML = `<div class ="button button_${a}">${a}</div>`;
    // }
    

//-------------Inner HTML end------------------------
    const numContent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];   
    const cluster = document.querySelectorAll('.cluster');
    const btns = document.querySelectorAll('.button');
    let index;   
//-------------------------------

    const   zero  = 0,
            one   = 1,
            two   = 2,
            three = 3,
            four  = 4,
            five  = 5,
            six   = 6,
            seven = 7,
            eight = 8,
            nine  = 9;

    const clusterNum = {
        a: zero,
        b: one,
        c: two,
        d: three,
        e: four,
        f: five,
        g: six,
        h: seven,
        i: eight,
        j: nine
    };

    cluster.forEach((clr, i) => {
        clr.addEventListener('click', () => {
            index = i;
            reverClusterBg();
            pourClusterBg(i);
        });
        innerHtmlCluster(i);
    });

    function reverClusterBg() {
        cluster.forEach(clr => {
        clr.classList.remove('clusterBg');
       }); 
    }

    function pourClusterBg(i) {
        cluster[i].classList.add('clusterBg'); 
    }   

    function showCluster(k) {
        cluster[index].innerHTML = `${numContent[k]}`;
        cluster[index].style.cssText = 'width: 50px; height: 50px; font-size: 45px; display: flex; justify-content: center; align-items: center;';
        
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
            
});



