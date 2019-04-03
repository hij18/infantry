$(document).ready(function () {
    let $os = $('#os');
    let $form = $('#getos');
    
    let feedBox = new FeedBox ($os);
    
    let newFb = new NewFeedBack ();
    newFb.render($form);
//  feedBox.getAjaxOs();
/*
    let os1 = new Os(126, 'Отзыв 1');
    os1.render($os);
    
    let os2 = new Os(127, 'Отзыв 2');
    os2.render($os);

    let os3 = new Os(128, 'Отзыв 3');
    os3.render($os);
*/  
    $($os).on('click', '.likebtn', function () {
        $(this).parent('div').toggleClass('like');
    });
    
    $($os).on('click', '.delbtn', function () {
        $(this).parent('div').hide();
        for (let i = 0; i < feedBox.allFeedBack.length; i++) {
            if ($(this).attr('data-id') == feedBox.allFeedBack[i].id_user) {
                feedBox.allFeedBack.splice(i, 1);
            }
        }
    });
    
    $($form).on('click', '.sendbtn', function (e) {
        e.preventDefault();
        let newId = 123;
        if (feedBox.allFeedBack.length > 0)
            {
                newId = feedBox.allFeedBack[feedBox.allFeedBack.length - 1].id_user + 1;
            }
        console.log(newId);
        let newText = $('#myFeedback').val();
        feedBox.add(newId, newText);
    });
    
});