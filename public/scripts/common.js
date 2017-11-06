/**
 * Created by niuqingxia on 2017/11/6.
 */
var commonEffect=commonEffect ||{};

commonEffect.commonHeader=function(){
    var menuItem=$(".nav-list").find("li");
    menuItem.hover(function(){
        $(this).addClass("select");
        $(this).find(".nav-son").slideDown(300);
    },function(){
        $(this).removeClass("select");
        $(this).find(".nav-son").slideUp(300);
    })
}
$(function(){
    commonEffect.commonHeader();
})
