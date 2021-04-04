$(document).ready(function () {
    $('.brands').on('click', function(event) {
		event.preventDefault();/*ngan chan chuyen trang web khac,(khong de the a chay theo mac dinh cua no) */
		/* Act on the event */
		
		$('html,body').animate({ scrollTop: $('.brand').offset().top}, 400,"easeOutCubic");/* 400 la toc do*/
	});
	$('.see-reviews').on('click', function(event) {
		event.preventDefault();/*ngan chan chuyen trang web khac,(khong de the a chay theo mac dinh cua no) */
		/* Act on the event */
		
		$('html,body').animate({ scrollTop: $('#evaluate-tab').offset().top}, 400,"easeOutCubic");/* 400 la toc do*/
	});
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		//console.log(pos_body);
		if(pos_body>50){
		   $('.header-main').addClass('co-dinh-menu');
		}
		else {
		   $('.header-main').removeClass('co-dinh-menu');
		}
		if(pos_body>200){
		   $('.back-to-top').addClass('hien-ra');
		}
		else{
		   $('.back-to-top').removeClass('hien-ra');
		}
	 });
	 $('.back-to-top').click(function(event) {
		$('html,body').animate({scrollTop: 0},1400);
	 });
	 
	 $('a.login-window').click(function() {
        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');
 
        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn(300);
 
        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over">');
        $('#over').fadeIn(300);
 
        return false;
 });
 
 // khi click đóng hộp thoại
 $(document).on('click', "a.close, #over", function() {
       $('#over, .login').fadeOut(300 , function() {
           $('#over').remove();
       });
      return false;
 });
});
function chitiet3(){
	var chiTiet1 =document.getElementById("chitiet1");
		var chiTiet3 =document.getElementById("chitiet31");
		var chiTiet4 =document.getElementById("chitiet41");
		var chiTiet5 =document.getElementById("chitiet51");
		chiTiet1.style.display="none";
		chiTiet4.style.display="none";
		chiTiet5.style.display="none";
		chiTiet3.style.display="block";
}
function chitiet4(){
	var chiTiet1 =document.getElementById("chitiet1");
		var chiTiet3 =document.getElementById("chitiet31");
		var chiTiet4 =document.getElementById("chitiet41");
		var chiTiet5 =document.getElementById("chitiet51");
		chiTiet1.style.display="none";
		chiTiet4.style.display="block";
		chiTiet5.style.display="none";
		chiTiet3.style.display="none";
}
function chitiet2(){
	var chiTiet1 =document.getElementById("chitiet1");
		var chiTiet3 =document.getElementById("chitiet31");
		var chiTiet4 =document.getElementById("chitiet41");
		var chiTiet5 =document.getElementById("chitiet51");
		chiTiet1.style.display="block";
		chiTiet4.style.display="none";
		chiTiet5.style.display="none";
		chiTiet3.style.display="none";
}
function chitiet5(){
	var chiTiet1 =document.getElementById("chitiet1");
		var chiTiet3 =document.getElementById("chitiet31");
		var chiTiet4 =document.getElementById("chitiet41");
		var chiTiet5 =document.getElementById("chitiet51");
		chiTiet1.style.display="none";
		chiTiet4.style.display="none";
		chiTiet5.style.display="block";
		chiTiet3.style.display="none";
}
