
var cart = []
$(document).ready(function () {
    $('.add-card').on('click', function () {
        var pdId = $(this).attr('productID')
        var pdName = $('#product-' + pdId).find('#pd-name').text();
        var pdUrl = $('#product-' + pdId).find('img').attr('src');
        var pdPrice = $('#product-' + pdId).find('#pd-price').text();
        pdPrice = pdPrice.replace('$','');
        pdPrice = pdPrice.replace(',','.');
        var objItem = {
            id: pdId,
            name: pdName,
            url: pdUrl,
            price: pdPrice
        };
        var flag = false;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].id == objItem.id) {
                flag = true;
            }
        }
        if (flag === false) {
            objItem.quantity = 1;
            cart.push(objItem);
        } else {
            cart[i - 1].quantity += 1;
        }
        $.session.set("cart", JSON.stringify(cart));
    });
})
