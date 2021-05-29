
 /*function movimg(){
    for (var i=2; i==13; i++){
        switch (i){
            case 2:  document.getElementById("img1").src="imag/Cin2.jpg";
            break;
            case 3:  document.getElementById("img1").src="imag/Cin3.jpg";
            break;
            case 4:  document.getElementById("img1").src="imag/Cin4.jpg";
            break;
            case 5:  document.getElementById("img1").src="imag/Cin5.jpg";
            break;
        }
    }
}*/
var cont=0;
function cambia() {
    cont++;
    switch(cont%11+1)
     {
     case 1:
        document.getElementById("img1").src="imag/Cin2.jpg";
        break;
     case 2:
        document.getElementById("img1").src="imag/Cin3.jpg";
        break;
     case 3:
        document.getElementById("img1").src="imag/Cin4.jpg";
        break;
     case 4:
        document.getElementById("img1").src="imag/Cin5.jpg";
        break;
     case 5:
        document.getElementById("img1").src="imag/Cin6.jpg";
        break;
     case 6:
        document.getElementById("img1").src="imag/Cin7.jpg";
        break;
     case 7:
        document.getElementById("img1").src="imag/Cin8.jpg";
        break;
     case 8:
        document.getElementById("img1").src="imag/Cin9.jpg";
        break;
     case 9:
        document.getElementById("img1").src="imag/Cin10.jpg";
        break;
     case 10:
        document.getElementById("img1").src="imag/Cin11.jpg";
        break;
     case 11:
        document.getElementById("img1").src="imag/Cin12.jpg";
        break;
     case 12:
        document.getElementById("img1").src="imag/Cin1.jpg";
        break;
    }
}   

function detener(){
    clearInterval(miVar);
}