/**
 * Created by niuqingxia on 2017/11/6.
 */
// 公共头部的效果
function commonHeader(){
    var menuItem=$(".nav-list").find("li");
    menuItem.hover(function(){
        $(this).addClass("select");
        $(this).find(".nav-son").slideDown(300);
    },function(){
        $(this).removeClass("select");
        $(this).find(".nav-son").slideUp(300);
    });
};
//渲染新闻列表
function renderNewsList(data,container){
    var templateBox=container || $(document);
    var template=[];
    var html='';
    for(var i=0;i<data.length;i++){
        html='<li><a href="#"><span class="num">'+ i+1+' </span>'+data[i].title+'</a>'
            +'<span class="info-time">'+data[i].time+'</span></li>'
        template.push(html);
    }
    templateBox.append(template.join(""));
}
// 渲染列表数据的方法
function renderTemplate(data,container){
	var templateBox=container || $(document);
	var template=[];
	var html='';
	if(data.model){
		for(var i=0;i<data.model.length;i++){
			html='<div class="item-module">'
				+'<a href="#" class="item-img"><img src="+data.model[i].projectPicture+" alt=""></a>'
				+'<div class="item-info">'
				+'<h6 class="item-info-name">'+data.model[i][projectName]+'</h6>'
				+'<i class="item-info-time">'+data.model[i][projectTime]+'</i>'
				+'<div class="item-info-content">'+data.model[i][projectIntro]+'</div>'
				+'<a href="#" class="learn-more">learn more <i class="fa fa-angle-right"></i></a>'
				+'</div></div>';
			template.push(html);
		}
	}
	templateBox.append(template.join(""));
};
//分页
function setAjaxPaginator(paginatorSelector, data, option) {
	var totals = data.total;//记录总条数
	var pageSize = option.pageSize; //每页条数
	var totalPages = 1;
	if (totals != 0) {
		if (totals % pageSize == 0) {
			totalPages = totals / pageSize;
		} else {
			totalPages = Math.ceil(totals / pageSize);
		}
	}
	if (totalPages > 1) {
		//当总页数大于1时生成显示分页否则不显示分页
		buildAjaxPaginator(paginatorSelector, $.extend(option, {totalPages: totalPages}))
	}
}
function buildAjaxPaginator(paginatorSelector, option) {
	var _option = {
		currentPage: 1, //当前页
		totalPages: 1, //总页数
		numberOfPages: 5, //设置控件显示的页码数
		bootstrapMajorVersion: 3,//如果是bootstrap3版本需要加此标识，并且设置包含分页内容的DOM元素为UL,如果是bootstrap2版本，则DOM包含元素是DIV
		useBootstrapTooltip: false,//是否显示tip提示框
		itemTexts: function (type, page, current) {//文字翻译
			switch (type) {
				case "first":
					return "首页";
				case "prev":
					return "上一页";
				case "next":
					return "下一页";
				case "last":
					return "尾页";
				case "page":
					return page;
			}
		},
		onPageClicked: function (event, originalEvent, type, page, pageSize) {
		}
	};
	$.extend(_option, option);
	paginatorSelector.bootstrapPaginator(_option);
}
function listPageShow(dataContainer,paginatorContainer,ajaxUrl,queryDataAdd){
	var defaultPagination={pageNo:1,pageSize:10};
	var defaultQueryData={
		pageNo:defaultPagination.pageNo,
		pageSize:defaultPagination.pageSize
	};
	$.extend(defaultQueryData,queryDataAdd);
	queryOperate(defaultPagination,ajaxUrl);//初始化
	//重写点击分页执行的方法 传递当前点击的页面
	function onPageClick(event, originalEvent, type, page) {
		queryOperate($.extend(defaultQueryData,{pageNo:page,pageSize:defaultPagination.pageSize}),ajaxUrl);
	};
	//查询操作
	function queryOperate(queryData,url){
		$.ajax({
			data:queryData,
			url:url,
			complete:function(result){
				setAjaxPaginator(paginatorContainer,result,{currentPage: queryData.page, pageSize:queryData.pageSize,onPageClicked: onPageClick});
				renderTemplate(result,dataContainer)
			}
		})
	}
}
$(function(){
   commonHeader();
})
