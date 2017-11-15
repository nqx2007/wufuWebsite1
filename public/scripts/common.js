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
// 渲染列表数据的方法
function renderTemplate(container,template,data){
    var proList=document.getElementById(template).innerHTML;
    var content=ejs.render(proList,{data:data});
    container.html(content);
};
//分页
 function buildAjaxPaginator(paginatorSelector, option,url,handleSuccess) {
	var _option = {
		currentPage: 1,
		totalPages: 1,
		numberOfPages: 5,
		bootstrapMajorVersion: 3,
		useBootstrapTooltip: false,
		itemTexts: function (type, page, current) {
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
			queryOperate(paginatorSelector,page,pageSize,url,handleSuccess);
		}
	};
	$.extend(_option, option);
	paginatorSelector.bootstrapPaginator(_option);
}
function queryOperate(paginatorSelector,page,pageSize,url,handleSuccess){
	var queryData={page: page||1, pageSize: pageSize || 10};//提交查询操作的参数
	$.ajax({
		data:queryData,
		url:url,
		complete:function(result){
			//生成分页
			var options={totalPages: result.totalPages,currentPage: queryData.page, pageSize:queryData.pageSize}
			if (result.totalPages > 1) {
				//当总页数大于1时生成显示分页否则不显示分页
				buildAjaxPaginator(paginatorSelector, options,url,handleSuccess)
			}
			//DOM操作显示装载的数据内容
			if(handleSuccess){
				handleSuccess(result.data);
			}
		}
	})
}
$(function(){
   commonHeader();
})
