/**
 * Created by pooh on 2017/11/6.
 */
var financeInfoPro=financeInfoPro ||{};
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
    // financeInfoPro.renderNewsList(newsList);
    // financeInfoPro.renderInfoList(itemList);
    render($(".financeInfo-area .info-content"),"financeInfoList-area",itemList);
    render($(".financeInfo-area .news-list"),"financeNewsList",newsList);
})
