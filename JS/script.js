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
    
//-------------Inner HTML end------------------------
     
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

//-------------------------------

    let box1_1, box1_2, box1_3, box1_4, box1_5, box1_6, box1_7, box1_8, box1_9,
        box2_1, box2_2, box2_3, box2_4, box2_5, box2_6, box2_7, box2_8, box2_9,
        box3_1, box3_2, box3_3, box3_4, box3_5, box3_6, box3_7, box3_8, box3_9,
        box4_1, box4_2, box4_3, box4_4, box4_5, box4_6, box4_7, box4_8, box4_9,
        box5_1, box5_2, box5_3, box5_4, box5_5, box5_6, box5_7, box5_8, box5_9,
        box6_1, box6_2, box6_3, box6_4, box6_5, box6_6, box6_7, box6_8, box6_9,
        box7_1, box7_2, box7_3, box7_4, box7_5, box7_6, box7_7, box7_8, box7_9,
        box8_1, box8_2, box8_3, box8_4, box8_5, box8_6, box8_7, box8_8, box8_9,
        box9_1, box9_2, box9_3, box9_4, box9_5, box9_6, box9_7, box9_8, box9_9;
    
    let rowBox_1, rowBox_2, rowBox_3, rowBox_4, rowBox_5, rowBox_6, rowBox_7, rowBox_8, rowBox_9,
        colBox_1, colBox_2, colBox_3, colBox_4, colBox_5, colBox_6, colBox_7, colBox_8, colBox_9;

    let scBox_11, scBox_12, scBox_13, scBox_21, scBox_22, scBox_23, scBox_31, scBox_32, scBox_33; 

    rowBox_1 = [box1_1, box1_2, box1_3, box1_4, box1_5, box1_6, box1_7, box1_8, box1_9];
    rowBox_2 = [box2_1, box2_2, box2_3, box2_4, box2_5, box2_6, box2_7, box2_8, box2_9];
    rowBox_3 = [box3_1, box3_2, box3_3, box3_4, box3_5, box3_6, box3_7, box3_8, box3_9];
    rowBox_4 = [box4_1, box4_2, box4_3, box4_4, box4_5, box4_6, box4_7, box4_8, box4_9];
    rowBox_5 = [box5_1, box5_2, box5_3, box5_4, box5_5, box5_6, box5_7, box5_8, box5_9];
    rowBox_6 = [box6_1, box6_2, box6_3, box6_4, box6_5, box6_6, box6_7, box6_8, box6_9];
    rowBox_7 = [box7_1, box7_2, box7_3, box7_4, box7_5, box7_6, box7_7, box7_8, box7_9];
    rowBox_8 = [box8_1, box8_2, box8_3, box8_4, box8_5, box8_6, box8_7, box8_8, box8_9];
    rowBox_9 = [box9_1, box9_2, box9_3, box9_4, box9_5, box9_6, box9_7, box9_8, box9_9];

    colBox_1 = [box1_1, box2_1, box3_1, box4_1, box5_1, box6_1, box7_1, box8_1, box9_1];
    colBox_2 = [box1_2, box2_2, box3_2, box4_2, box5_2, box6_2, box7_2, box8_2, box9_2];
    colBox_3 = [box1_3, box2_3, box3_3, box4_3, box5_3, box6_3, box7_3, box8_3, box9_3]; 
    colBox_4 = [box1_4, box2_4, box3_4, box4_4, box5_4, box6_4, box7_4, box8_4, box9_4];
    colBox_5 = [box1_5, box2_5, box3_5, box4_5, box5_5, box6_5, box7_5, box8_5, box9_5];
    colBox_6 = [box1_6, box2_6, box3_6, box4_6, box5_6, box6_6, box7_6, box8_6, box9_6];
    colBox_7 = [box1_7, box2_7, box3_7, box4_7, box5_7, box6_7, box7_7, box8_7, box9_7];
    colBox_8 = [box1_8, box2_8, box3_8, box4_8, box5_8, box6_8, box7_8, box8_8, box9_8];
    colBox_9 = [box1_9, box2_9, box3_9, box4_9, box5_9, box6_9, box7_9, box8_9, box9_9];

    scBox_11 = [box1_1, box1_2, box1_3, box2_1, box2_2, box2_3, box3_1, box3_2, box3_3];
    scBox_12 = [box1_4, box1_5, box1_6, box2_4, box2_5, box2_6, box3_4, box3_5, box3_6];
    scBox_13 = [box1_7, box1_8, box1_9, box2_7, box2_8, box2_9, box3_7, box3_8, box3_9];
    scBox_21 = [box4_1, box4_2, box4_3, box5_1, box5_2, box5_3, box6_1, box6_2, box6_3];
    scBox_22 = [box4_4, box4_5, box4_6, box5_4, box5_5, box5_6, box6_4, box6_5, box6_6];
    scBox_23 = [box4_7, box4_8, box4_9, box5_7, box5_8, box5_9, box6_7, box6_8, box6_9];
    scBox_31 = [box7_1, box7_2, box7_3, box8_1, box8_2, box8_3, box9_1, box9_2, box9_3];
    scBox_32 = [box7_4, box7_5, box7_6, box8_4, box8_5, box8_6, box9_4, box9_5, box9_6];
    scBox_33 = [box7_7, box7_8, box7_9, box8_7, box8_8, box8_9, box9_7, box9_8, box9_9];

    let allBoxs = [
        box1_1, box1_2, box1_3, box1_4, box1_5, box1_6, box1_7, box1_8, box1_9,
        box2_1, box2_2, box2_3, box2_4, box2_5, box2_6, box2_7, box2_8, box2_9,
        box3_1, box3_2, box3_3, box3_4, box3_5, box3_6, box3_7, box3_8, box3_9,
        box4_1, box4_2, box4_3, box4_4, box4_5, box4_6, box4_7, box4_8, box4_9,
        box5_1, box5_2, box5_3, box5_4, box5_5, box5_6, box5_7, box5_8, box5_9,
        box6_1, box6_2, box6_3, box6_4, box6_5, box6_6, box6_7, box6_8, box6_9,
        box7_1, box7_2, box7_3, box7_4, box7_5, box7_6, box7_7, box7_8, box7_9,
        box8_1, box8_2, box8_3, box8_4, box8_5, box8_6, box8_7, box8_8, box8_9,
        box9_1, box9_2, box9_3, box9_4, box9_5, box9_6, box9_7, box9_8, box9_9
    ];
    

    allBoxs.forEach((box) => {
        box = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    });

    console.log(box5_1);
//-------------------------------

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
        cluster[index].innerHTML = `${k}`;
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

//---------------------------------------------------------------


            
});



