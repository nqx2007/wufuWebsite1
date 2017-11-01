/**
 * Created by pooh on 2017/10/29.
 */
$(function(){
    var options={
        navigation:true,
        paddingTop:'70px',
        navigationPosition:'right',
        sectionsColor : ['#f2f2f2', '#f2f2f2', '#f2f2f2', '#f2f2f2'],
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.item-box').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 3){
                $('.section3').find('.pro-item1').delay(500).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item2').delay(510).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item3').delay(520).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item4').delay(530).animate({
                    right: '0'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item5').delay(540).animate({
                    right: '0'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item6').delay(550).animate({
                    right: '0'
                }, 1500, 'easeOutExpo');
            }
            if(index == 4){
                $('.section4').find('p').fadeIn(2000);
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.item-box').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '3'){
                $('.section3').find('.pro-item1').delay(500).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item2').delay(510).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item3').delay(520).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item4').delay(530).animate({
                    right: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item5').delay(540).animate({
                    right: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section3').find('.pro-item6').delay(550).animate({
                    right: '-120%'
                }, 1500, 'easeOutExpo');
            }
            if(index == '4'){
                $('.section4').find('p').fadeOut(2000);
            }
        }
    }
    $('#fullPage').fullpage(options);
    $(window).resize(function(){
        autoScrolling();
    });
    function autoScrolling(){
        var $wWidth = $(window).width();
        if($wWidth < 700){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();
    // setInterval(function(){
    //     $.fn.fullpage.moveSlideRight();
    // }, 3000);
});
