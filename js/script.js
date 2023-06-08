/*var base=10;
var altura=20;
var area=base*altura/2
console.log("El área es: "+area);*/

var formulario=document.getElementById("formulario");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    var base=document.getElementById("base").value;
    var altura=document.getElementById("altura").value;
    var area=base*altura/2;
    console.log("El área es: "+area);
    document.getElementById("area").value=area;
});