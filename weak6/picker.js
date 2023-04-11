  //creation of increment function
function increment() {
   var number = document.getElementById("display");
   number.innerHTML = parseInt(number.innerHTML)+1;
}
//creation of decrement function
function decrement() {
    var number = document.getElementById("display");
    number.innerHTML=parseInt(number.innerHTML)-1;
}
function clear1() {
    document.getElementById("display").innerHTML = "0";
}
function orange(){
    document.getElementById("clr").style.backgroundColor = "orange";
}
function blue(){
    document.getElementById("clr").style.backgroundColor = "blue";
}
function beige(){
    document.getElementById("clr").style.backgroundColor = "beige";
}
function black(){
    document.getElementById("clr").style.backgroundColor = " black";
}
function brown(){
    document.getElementById("clr").style.backgroundColor = "brown";
}
function green(){
    document.getElementById("clr").style.backgroundColor = "green";
}
