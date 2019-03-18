$(document).ready(function () {
    $('#checkOutBtn').click(function (e) { 
        checkout();
    });
    //checkout();
});


function checkout(){
    var cart = JSON.parse(sessionStorage.getItem('cart'));
    var cartItems = [];
    for(var i = 0; i< cart.length; i++){
        cartItems.push({
            ProductId : cart[i].id,
            Quantity : cart[i].quantity
        });
    }
    console.log(cartItems);
    
    $.ajax({
        type: "POST",
        url: "http://localhost:3000",
        data: {
            cartItems : cartItems,
            Coupon: "hehe"
        },
        success: function (response) {
            console.log(response);
        }
    });
}