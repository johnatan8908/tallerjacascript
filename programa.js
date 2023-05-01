
function media(){

    let campo_x= document.getElementById("x");
    let campo_y= document.getElementById("y");
    let campo_z= document.getElementById("z");
    
    let x=(campo_x.value);
    let y=(campo_y.value);
    let z=(campo_z.value);

    let promedio= (x+y+z)/3

    console.log(promedio);
    return promedio;
}