/**
 * Created by 18328 on 2016/8/25.
 */
window.onload = function () {

    //
    var Width = document.getElementById("box-cont-window").clientWidth;
    var cont_list_item = document.getElementsByClassName("cont-list-item");
    for(var i=0;i < cont_list_item.length; i++ ){
        cont_list_item[i].style.width = Width*0.965 + "px";
        cont_list_item[i].style.height = 100 + "%";
        cont_list_item[i].style.marginRight = 15 + "px";
    }
    //
    var user_list = document.getElementsByClassName("user-list-item");
    var num = 0;
    for(var i =0; i < user_list.length; i++){
        user_list[i].id=i;
        user_list[i].onclick = function () {
            for(var j = 0; j < user_list.length; j++){
                user_list[j].className = "user-list-item";
                cont_list_item[j].style.display = "none";
            }
            this.className = "user-list-item select";
            num = this.id;
            cont_list_item[this.id].style.display = "block";
        }
    }

    var user_img_cont = document.getElementsByClassName("user-img")[0];
    var user_img = user_img_cont.getElementsByTagName("img")[0].attributes["src"].value;
    var click = document.getElementsByClassName("input-group-btn")[0];



    click.onclick = function () {
        var box = document.getElementsByClassName("cont-list-item")[num];
        var messege = document.getElementsByClassName("form-control")[0];
        var messege_box = document.createElement("div");
        messege_box.className = "cont-right";
        messege_box.innerHTML =
                '<img '+'src="'+user_img+'"'+' alt=""/>'+
                '<div class="cont-text cont-text-right">'+
                    '<span>'+messege.value+'</span>'+
                    '<span class="right-poit"></span>'+
                '</div>';
        box.appendChild(messege_box);
        messege.value = '';
    }
}