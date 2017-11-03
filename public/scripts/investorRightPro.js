/**
 * Created by niuqingxia on 2017/11/3.
 */
var stockRightPro=stockRightPro ||{};
stockRightPro.renderHeader=function(data){
    var proListHeader=document.getElementById("stockRightPro-area").innerHTML;
    var content=ejs.render(proListHeader,{data:data});
    $(".stockRightPro-header").html(content);
}
$(function(){
    var proListHeader={url:'',menu:'投资者服务',subMenu:'股权项目'}
    stockRightPro.renderHeader(proListHeader);
})
