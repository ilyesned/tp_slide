/* optimiser le chargement du js et créer un objet pour gérer les 3 fonctions 10/20 */

const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

let navigation = {

     slideSuivante(){
        items[count].classList.remove('active');
    
        if(count < nbSlide - 1){
            count++;
        } else {
            count = 0;
        }
    
        items[count].classList.add('active')
        console.log(count);
        
    },
    
    
    slidePrecedente(){
        items[count].classList.remove('active');
    
        if(count > 0){
            count--;
        } else {
            count = nbSlide - 1;
        }
    
        items[count].classList.add('active')
        // console.log(count);
        
    },

    keyPress(e){
        console.log(e);
        
        if(e.keyCode === 37){
            navigation.slidePrecedente();
        } else if(e.keyCode === 39){
            navigation.slideSuivante();
        }
    }
    
}

suivant.addEventListener('click', navigation.slideSuivante)
precedent.addEventListener('click', navigation.slidePrecedente)
document.addEventListener('keydown', navigation.keyPress)




