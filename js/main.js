
$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop:true
   });
})
$(function(){
	//优化留学方案
	$('section .plan .list').css("display","none");
	var flag=1;
	$("#pulldown").click(function(){
		if(flag==1){
			$(this).css("transform","rotate(180deg)");
			$('section .plan .list').css("display","block");
			flag=2;
		}else if(flag==2){
			$(this).css("transform","rotate(0deg)");
			$('section .plan .list').css("display","none");
			flag=1;
		}
	})	
})
$(function(){
	$("#beijing").addClass("on");
	$("section .schools .wrap:nth-child(3)").show();
	$("section .schools .nav ul li").each(function(index){
		$(this).hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$("section .schools .wrap").hide().eq(index).show();
		})
	})
})
$(function(){
	//侧边栏
	var flag=1;
	$("#aside").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn2.png");
			$("aside .asid").css("right","0");
			$("#all,footer").css("transform","translateX(-2.55rem)");
			flag=2;
		}else if(flag==2){
			$(this).attr("src","images/ico_btn2_hov.png");
			$("aside .asid").css("right","-2.55rem");
			$("#all,footer").css("transform","translateX(0)");
			flag=1;
		}
	})
})
$(function(){
	//加载更多
	var flag=1;
	$("section .schools button").click(function(){
		if(flag==1){
			$(this).text("点击收起更多");
			$("section .schools .wrap .add").show();
			flag=2;
		}else if(flag==2){
			$(this).text("点击加载更多");
			$("section .schools .wrap .add").hide();
			flag=1;
		}

	})
})
$(function(){
	$("#aler").click(function(){
		$("section .wind").show();
		$("section .backg").show();
	})
	$("#close").click(function(){
		$("section .wind").hide();
		$("section .backg").hide();
	})
	var flag=1;
	$("section .btn img:last-child").click(function(){
		if(flag==1){
			$(this).attr("src","images/ico_btn23.png");
			$("section .btn img:nth-child(1)").animate({"left":"1.21rem"},500);
			$("section .btn img:nth-child(2)").animate({"left":"2.18rem"},500);
			$("section .btn img:nth-child(3)").animate({"left":"3.15rem"},500);
			$("section .btn img:nth-child(4)").animate({"left":"4.12rem"},500);
			$("section .btn img:nth-child(5)").animate({"left":"5.09rem"},500);
			flag=2;
		}else if(flag==2){
			$(this).attr("src","images/ico_btn22.png");
			$("section .btn img:nth-child(1)").animate({"left":"0.05rem"},500);
			$("section .btn img:nth-child(2)").animate({"left":"0.05rem"},500);
			$("section .btn img:nth-child(3)").animate({"left":"0.05rem"},500);
			$("section .btn img:nth-child(4)").animate({"left":"0.05rem"},500);
			$("section .btn img:nth-child(5)").animate({"left":"0.05rem"},500);
			flag=1;
		}	
	})
	
	$("section .btn img:nth-child(5)").click(function(){
		window.scrollTo(0,0);
	})
	
	function doMoveUp(){
		$("#new li:first").animate({"marginTop":"-0.4rem"},1000,function(){
			$(this).css({"marginTop":"0rem"}).appendTo("#new");
		});
	}
	setInterval(doMoveUp,2000);
	
	function doAlert(){
		$("section .wind").show();
		$("section .backg").show();
	}
	// var timer=setInterval(doAlert,5000);
})

$(function (){
	$("footer .bottom ul li:first-child").addClass("cha");
	$("footer .bottom ul li").each(function(index){
		$(this).click(function(){
			$(this).addClass("cha").siblings().removeClass("cha");
		})
	})
})
