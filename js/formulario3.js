var base=document.getElementById("base");
var altura=document.getElementById("altura");
var baseDato;
var alturaDato;
base.addEventListener("blur",()=>{
    var baseDato=document.getElementById("base").value;
});

altura.addEventListener("blur",()=>{
    var alturaDato=document.getElementById("altura").value;
    var area=baseDato*alturaDato/2;
    document.getElementById("area").value=area;
    var areaTexto=document.getElementById("areaTexto");
    areaTexto.innerHTML=area;
});