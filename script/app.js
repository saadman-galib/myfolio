// console.log('Creative design.');
// console.log('Welcome to the console.');

var navBtn = document.querySelector('.nav-btn')
var navListContainer = document.querySelector('.nav-items')

navBtn.addEventListener("click", function(){
    // console.log('Hi')
    if (navListContainer.style.right == '900px'){
        navListContainer.style.right = '-30px';
    }

    else{
        navListContainer.style.right = "900px";
    }
});