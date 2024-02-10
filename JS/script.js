window.addEventListener('DOMContentLoaded', () => {

    const numContent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const btnsParent = document.querySelector('.buttons');
    const cluster = document.querySelectorAll('.cluster');
    const btns = document.querySelectorAll('.button');
    let index;

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



