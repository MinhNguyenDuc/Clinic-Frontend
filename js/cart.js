
var cart = []
$(document).ready(function () {
    if (JSON.parse($.session.get("cart")) != null){
        cart = JSON.parse($.session.get("cart"))
    }
    
    drawCheckout();
    $(document).on('click', '.qtybtn', function () {
        var a = $(this).closest('.cart-item').find('.quantity');
        var oldValue = a.find('input').val();
        if ($(this).hasClass('inc')) {
            var id = $(this).closest(".cart-item").attr("id");
            for(var i = 0; i <cart.length; i ++) {
                if (cart[i].id == id) {
                    cart[i].quantity += 1
                }
            }
        } else {
            if (oldValue > 1) {
                var id = $(this).closest(".cart-item").attr("id");
                for(var i = 0; i <cart.length; i ++) {
                    if (cart[i].id == id) {
                        cart[i].quantity --
                    }
                };
            } else {
                cart.splice(i, 1);
                $(this).closest('.cart-item').remove();
            }
        }
        $.session.set("cart",JSON.stringify(cart))
       drawCheckout();
    });
});

function drawCheckout() {
    $('tbody').empty();
    var totalMoney = 0;
    for (var i = 0; i < cart.length; i++) {
        totalMoney += cart[i].price * cart[i].quantity;
        var ckUnit = `
            <tr class="cart-item" id="${cart[i].id}">
                <td class="product-col" >
                    <img src="${cart[i].url}" alt="">
                    <div class="pc-title">
                        <h4>${cart[i].name}</h4>
                        <p>$${cart[i].price}</p>
                    </div>
                </td>
                <td class="quy-col">
                    <div class="quantity">
                        <div class="pro-qty">
                            <span class="dec qtybtn">-</span>
                            <input class="quantity" type="text" value="${cart[i].quantity}">
                            <span class="inc qtybtn">+</span>
                        </div>
                    </div>
                </td>
                <td class="total-col"><h4>$${(cart[i].quantity * parseFloat(cart[i].price))}</h4></td>
            </tr>
        `;

        $('tbody').append(ckUnit);

    }
    $('.total-cost').empty();
    var ckUnit = `
        <h6>Tổng cộng <span>$${totalMoney}</span></h6>
    `
    $('.total-cost').append(ckUnit)
}


function updateCart () {

}