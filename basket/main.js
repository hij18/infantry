$(document).ready(function () {
    //Товары
    let $goods = $('#goods');
    let good1 = new Good(123, 'Мышь для ПК', 500);
    good1.render($goods);

    let good2 = new Good(124, 'Клавиатура для ПК', 900);
    good2.render($goods);

    //Корзина
    let basket = new Basket('basket');
    basket.render($('#basket_wrapper'));

    //Добавление товара в корзину
    $('.buygood').on('click', function () {
        let idProduct = parseInt($(this).attr('data-id'));
        let price = parseInt($(this).parent().find('.product-price').text());
        basket.add(idProduct, price);
    });
    
    $('.delgood').on('click', function () {
        let idProduct = parseInt($(this).attr('data-id'));
        basket.remove(idProduct);
    });
});