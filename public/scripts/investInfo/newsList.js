/**
 * Created by pooh on 2017/11/6.
 */
function renderNewsList(data){
    var proList=document.getElementById("newsList").innerHTML;
    var content=ejs.render(proList,{data:data});
    $(".news-list").html(content);
};
$(function(){
    var newsList=[
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"},
        {title:"hahahahahahahahhaahhahah",time:"2017-10-11"}

    ];
    renderNewsList( newsList)
})