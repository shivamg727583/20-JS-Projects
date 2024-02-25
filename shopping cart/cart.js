
var label= document.querySelector(".label");
var shoppingCart=document.querySelector(".cover");
var basket=JSON.parse(localStorage.getItem("data")) || [];

function calculated(){
    var cartItem=document.querySelector(".cart-amount")
    cartItem.innerHTML=basket.map((x) => x.item).reduce((x, y) => x + y, 0);

};
calculated();




