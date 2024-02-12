window.addEventListener('DOMContentLoaded', () => {

    const numContent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const btnsParent = document.querySelector('.buttons');
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

    

    function aaaBbb() {
        cluster[0].innerHTML = `
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

    aaaBbb();




            

    cluster.forEach((clr, i) => {
        clr.addEventListener('click', () => {
            index = i;
            reverClusterBg();
            pourClusterBg(i);
        });
       
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



