$(function(){
	/*nav_details & search*/
	var $nav_list1=$("#nav_list1");
	var $nav_det1=$("#nav_det1");
	var $searchInput=$("#search_input");
	$searchInput.click(function(){
		$searchInput.val("");
	});
	$nav_list1.mouseover(function(){
		$nav_det1.show();
	}).mouseout(function(){
		$nav_det1.hide();
	});

	/*滚动*/
	var itemScroll=document.getElementById("item_scroll");
	var	iHeight=30;
	var	speed=30;
	var	delay=2000;
	var	time;
	itemScroll.scrollTop=0;
	itemScroll.innerHTML+=itemScroll.innerHTML;
	function startScroll(){
		time=setInterval(scrollUp,speed);
		itemScroll.scrollTop++;
	}
	function scrollUp(){
		if(itemScroll.scrollTop % iHeight ==0){
			clearInterval(time);
			setTimeout(startScroll,delay);
			}else{
				itemScroll.scrollTop++;
				if(itemScroll.scrollTop>=itemScroll.scrollHeight/2){
					itemScroll.scrollTop=0;
				}
		}
	}
	setTimeout(startScroll,delay);

	/*导航条*/
	$(window).scroll(function () {
		var items = $(".item");
		var menu = $("#guide_total");
		var top = $(document).scrollTop();
		var currentId = ""; //滚动条现在所在位置的item id
		items.each(function () {
			var t = $(this);
			//注意：m.offset().top代表每一个item的顶部位置
			if (top > t.offset().top - 200) {
				currentId = "#" + t.attr("id");
			} else {
				return false;
			}
		});

		var currentLink = menu.find(".current");
		if (currentId && currentLink.attr("href") !== currentId) {
			currentLink.removeClass("current");
			menu.find("[href=" + currentId + "]").parent().addClass("current");
		}
	});
	
	/*nav_tit滑动*/
	var $navAs = $("#nav").find(".nav_tit_1").siblings();
	//var iopacity=0;
	//var timer=null;
	$.each($navAs,function(){
		var t=$(this);
		t.mouseover(function(){	
			t.find(".nav_tit_hover").fadeIn(200);
			/*clearInterval(timer);
			timer=setInterval(function(){	
				if(iopacity===100){
					clearInterval(timer);
				}else{
					iopacity+=10;
					t.find(".nav_tit_hover").css("opacity",iopacity/100);
				}
			},40);*/
		});
		t.mouseout(function(){
			/*if(t.find(".nav_tit_hover").css("opacity",1)){
				iopacity=0;
				t.find(".nav_tit_hover").css("opacity",iopacity);
				return false
				
			}*/
				   t.find(".nav_tit_hover").fadeOut(1);
		});
	});
	
});







