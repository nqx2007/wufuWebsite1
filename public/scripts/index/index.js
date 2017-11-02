/**
 * Created by pooh on 2017/10/29.
 */
var indexEffect=indexEffect ||{};
indexEffect.indexBarShow=function(){
    var menuItem=$(".nav-list").find("li");
    menuItem.hover(function(){
        $(this).addClass("select");
        $(this).find(".nav-son").slideDown(300);
    },function(){
        $(this).removeClass("select");
        $(this).find(".nav-son").slideUp(300);
    })
    menuItem.on('click',function(){
        $(this).addClass("on").siblings().removeClass("on");
    })
};
indexEffect.fullPageAct=function(){
    var options={
        navigation:true,
        paddingTop:'100px',
        navigationPosition:'right',
        sectionsColor : ['#fff', '#fff', '#fff', '#fff'],
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.item-box').animate({
                    left: '0'
                }, 600, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('.pro-box').animate({
                    right: '0'
                }, 600, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('p').fadeIn(2000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.item-box').animate({
                    left: '-120%'
                }, 600, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('.pro-box').animate({
                   right: '-120%'
                }, 600, 'easeOutExpo');
            }
            if(index == '4'){
                $('.section4').find('p').fadeOut(2000);
            }
        }
    };
    $('#fullPage').fullpage(options);
};
indexEffect.autoScrolling=function(){
    var $wWidth = $(window).width();
    if($wWidth < 700){
        $.fn.fullpage.setAutoScrolling(false);
    } else {
        $.fn.fullpage.setAutoScrolling(true);
    }
}
indexEffect.renderProject=function(data){
    var proList=document.getElementById("proList").innerHTML;
    var content=ejs.render(proList,{data:data});
    $(".pro-box").html(content);

}
$(function(){
    var proLIstData=[
        {url:'',name:'项目一',value:'hahahahaahhah'},
        {url:'',name:'项目二',value:'hahahahaahhah'},
        {url:'',name:'项目三',value:'hahahahaahhah'}
    ];//假数据，需要ajx从后台获取
    indexEffect.indexBarShow();
    indexEffect.fullPageAct();
    indexEffect.renderProject(proLIstData);
    $(window).resize(function(){
        indexEffect.autoScrolling();
    });
    indexEffect.autoScrolling();
    
});
