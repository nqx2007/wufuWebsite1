/**
 * Created by pooh on 2017/11/6.
 */
var financeInfoPro=financeInfoPro ||{};
financeInfoPro.renderInfoList=function(data){
    var proList=document.getElementById("financeInfoList-area").innerHTML;
    var content=ejs.render(proList,{data:data});
    $(".financeInfo-area .info-content").html(content);
};
financeInfoPro.renderNewsList=function(data){
    var proList=document.getElementById("financeNewsList").innerHTML;
    var content=ejs.render(proList,{data:data});
    $(".financeInfo-area .news-list").html(content);
}
$(function(){
    var itemList=[
        {url:'../../public/images/index/project.jpg',name:'项目一',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目二',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目三',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目一',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目四',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目五',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目六',time:'2001-10-12',content:'hahahahahahhh'},
        {url:'../../public/images/index/project.jpg',name:'项目七',time:'2001-10-12',content:'hahahahahahhh'},
    ];//假数据，需要使用ajax从后台获取
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
    financeInfoPro.renderNewsList(newsList);
    financeInfoPro.renderInfoList(itemList);
})