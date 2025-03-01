let array_galeria = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

let btnControlLeft = document.getElementById("btn-control-left");
let btnControlRigth = document.getElementById("btn-control-rigth");
let galeria = document.getElementById("galeria-imagenes");
let index = 0;

btnControlLeft.addEventListener("click",() => {
    if(index != 0){
        index--;
    }else{
        index = array_galeria.length - 1;
    }
    
    galeria.style.backgroundImage = `url(../assets/images/galeria/${array_galeria[index]})`;
});

btnControlRigth.addEventListener("click", () => {
    if(index != array_galeria.length - 1){
        index++;
    }else{
        index = 0;
    }

    galeria.style.backgroundImage = `url(../assets/images/galeria/${array_galeria[index]})`;

});
