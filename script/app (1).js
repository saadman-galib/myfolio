// console.log('Creative design.');
// console.log('Welcome to the console.');

var navBtn = document.querySelector('.nav-btn')
var navListContainer = document.querySelector('.nav-items')

var a = 0

navBtn.addEventListener("click", function(){
    if (a <=0){
        navListContainer.style.right = '100vw'
        a += 1 
    }
    // else{
    //     pass
    // }
    // console.log('Hi')
    if (navListContainer.style.right == '100vw'){
        navListContainer.style.right = '-30px';
    }

    else{
        navListContainer.style.right = "100vw";
    }
});