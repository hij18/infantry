class FeedBox
{
    constructor(idBox) 
    {
        this.id = idBox;
        this.allFeedBack = [];
        this.getAjaxOs();
    }
    getAjaxOs() {
        $.ajax({
            url: './fb.json',
            type: 'GET',
            dataType: 'json',
            context: this,
            success: function (data) {
                for (let i = 0; i < data.length; i++) 
                {
                   // this.add(data[i].id_user, data[i].text);
                    let os1 = new Os(data[i].id_user, data[i].text);
                    this.allFeedBack.push(data[i]);
                    os1.render(this.id);
                }
            },
            error: function (error) {
                console.log("Нужно больше золота...!");
            }
        });
    }
    
    add (id, text) {
        let newOs = {
            id_user: id,
            text: text
        }
        let os1 = new Os(id, text);
        this.allFeedBack.push(newOs);
        os1.render(this.id);
    }
}