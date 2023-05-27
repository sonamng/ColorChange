
//var page= document.getElementById("page");
//console.log(page)

//var redbut=document.querySelector(".red");
//console.log(redbut)
//var greenbut=document.querySelector(".green");
//console.log(greenbut)
//var pinkbut=document.querySelector(".pink");
//console.log(pinkbut)

//redbut.addEventListener('click',()=>page.style.background="red")
//greenbut.addEventListener('click',()=>page.style.background="green")
//pinkbut.addEventListener('click',()=>page.style.background="pink")




var page= document.getElementById("page");




var redbut=document.getElementById('red');
redbut.onclick=function(){
    page.style.backgroundColor = "red";
}
var greenbut=document.getElementById("green");
greenbut.onclick=function(){
    page.style.backgroundColor="green"
}
var pinkbut=document.getElementById("pink");
pinkbut.onclick=function(){
    page.style.backgroundColor="pink"
}




