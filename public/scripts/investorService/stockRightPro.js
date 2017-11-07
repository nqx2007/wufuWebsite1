/**
 * Created by niuqingxia on 2017/11/6.
 */
var stockRightPro=stockRightPro ||{};
// stockRightPro.renderProList=function(data){
//     var proList=document.getElementById("stockRightPro-area").innerHTML;
//     var content=ejs.render(proList,{data:data});
//     $(".proList-area").html(content);
// }
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
    render.renderProList($(".proList-area"),"stockRightPro-area",itemList);
})
