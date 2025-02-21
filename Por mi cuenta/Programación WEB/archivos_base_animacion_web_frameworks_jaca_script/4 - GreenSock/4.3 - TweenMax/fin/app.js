var animacion;
var logo;
var btnReiniciar;
var btnAnimar;
var btnAnimarImg;

window.onload = function() {
    btnAnimar = document.getElementById("btnAnimar");
    btnReiniciar = document.getElementById("btnReiniciar");
    btnAnimarImg = document.getElementById("btnAnimarImg");
    logo = document.getElementById("logo");
    btnAnimar.onclick = animar;
    btnAnimarImg.onclick = animarImg;

}

function animar() {
    animacion = TweenMax.to(logo, 2, {
        left: 400,
        repeat: 2,
        repeatDelay:1,
        yoyo:true
    });


    btnReiniciar.onclick = function() {
        animacion.restart();
    }
}

function animarImg(){
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    TweenMax.staggerTo([img1, img2, img3], 2, {
        left: 400
    }, 0.5);
}