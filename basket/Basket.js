class Basket
{
    constructor(idBasket)
    {
        this.id = idBasket;

        //this.countGoods = 0; //Общее количество товаров
        this.amount = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров
        this.ajaxGetItems(); //Получение уже добавленных товаров
    }

    render($jQueryElement)
    {
        let $basketDiv = $('<div/>', {
           id: this.id,
           text: 'Корзина'
        });

        let $basketItemsDiv = $('<div/>', {
            id: this.id + '_items'
        });

        $basketItemsDiv.appendTo($basketDiv);
        $basketDiv.appendTo($jQueryElement);
    }

    ajaxGetItems()
    {
        let appendId =`#${this.id}_items`;
        //let self = this;
        $.ajax({
            type: 'GET',
            url: './basket_get.json',
            dataType: 'json',
            context: this,
            success: function (data) {
                let $basketData = $('<div/>', {
                    id: 'basket_data'
                });

                this.amount = data.amount;
                for (let i = 0; i < data.basket.length; i++)
                {
                    this.basketItems.push(data.basket[i]);
                }

                $basketData.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
                $basketData.append(`<p>Общая сумма: ${this.amount} руб.</p>`);
                $basketData.appendTo(appendId);
            },
            error: function (error) {
                console.log('Ошибка при получении содержимого корзины', error);
            }
        });
    }

    add(idProduct, price)
    {
        let basketItems = {
            "id_product": idProduct,
            price //price: price
        };

        this.basketItems.push(basketItems);
        this.amount += price; //this.amount = this.amount + price;
        this.refresh(); //Перерисовываем корзину
    }

    remove(idProduct)
    {
        console.log("Tut");
        for (let i = 0; i < this.basketItems.length; i++) {
            if (this.basketItems[i].id_product == idProduct) {
                this.amount -= this.basketItems[i].price;
                this.basketItems.splice(i, 1);
                break;
            }
        }
        this.refresh();
    }

    refresh()
    {
        let $basketDataDiv = $('#basket_data');
        $basketDataDiv.empty(); //Очищаем содержимое контейнера
        $basketDataDiv.append(`<p>Всего товаров: ${this.basketItems.length}</p>`);
        $basketDataDiv.append(`<p>Общая сумма: ${this.amount} руб.</p>`);
    }
}