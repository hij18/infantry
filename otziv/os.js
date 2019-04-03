class Os
{
    constructor (id, cont)
    {
        this.id = id;
        this.cont = cont;
        this.status = status;
    }
    
    render ($container) {
        let $fbContainer = $('<div />', {
            class: 'feedback'
        });
        
        let $fbText = $('<p />', {
            text: 'Текст отзыва: ' + this.cont
        });
        
        let $fbBtnLike = $('<button />', {
            class: 'likebtn',
            text: 'Лайк'
        });
        
        let $fbBtnDel = $('<button />', {
            class: 'delbtn',
            "data-id": this.id,
            text: 'Удалить'
        });   
        $fbText.appendTo($fbContainer);
        $fbBtnLike.appendTo($fbContainer);
        $fbBtnDel.appendTo($fbContainer);
        $fbContainer.appendTo($container);
    }
    
    
}