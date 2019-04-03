class  NewFeedBack
{
    constructor ()
    {
        
    }
    
    render ($container) {
        let $formContainer = $('<form />', {
            class: 'formOs'
        });
        
        let $textInput = $('<input />', {
            id: 'myFeedback',
            type: 'text',
            placeholder: "Введите отзыв сюда",
            class: 'formOs'
        });
        
        let $sendBtn = $('<button />', {
            class: 'sendbtn',
            text: 'Отправить'
        });
        
        $textInput.appendTo($formContainer);
        $sendBtn.appendTo($formContainer);
        $formContainer.appendTo($container);
        //feedBox.allFeedBack[feedBox.allFeedBack.length - 1].id_user + 1
    }
}