
function mediaparcial(){

    let campo_parcial1= document.getElementById("parcial1");
    let campo_parcial2= document.getElementById("parcial2");
    let campo_parcial3= document.getElementById("parcial3");
    let parcial1= parseInt(campo_parcial1.value);
    let parcial2= parseInt(campo_parcial2.value);
    let parcial3= parseInt(campo_parcial3.value);
    let promedio1= (parcial1+parcial2+parcial3)/3

    console.log(promedio1);

    
}
function media(){
    let campo_parcial= document.getElementById("parcial");
    let campo_examen= document.getElementById("examen");
    let campo_trabajo= document.getElementById("trabajo");
    
    let parcial= parseInt(campo_parcial.value);
    let examen= parseInt(campo_examen.value);
    let trabajo= parseInt(campo_trabajo.value);

    
    let nota= (parcial*0.55)+(examen*0.3)+(trabajo*0.15) ;


    console.log(nota);
    return nota;
}
