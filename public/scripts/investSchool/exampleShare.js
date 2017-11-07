/**
 * Created by niuqingxia on 2017/11/7.
 */
var exampleSharePro=exampleSharePro ||{};
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
    render($(".exampleShare-area .news-list"),"newsList",newsList);
    render($(".exampleShare-area .info-content"),"exampleShareList-area",itemList);
})
