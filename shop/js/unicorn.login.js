/**
 * Unicorn Admin Template
 * Diablo9983 -> diablo9983@gmail.com
**/
$(document).ready(function(){

	var login = $('#loginform');
	var recover = $('#recoverform');
	var speed = 400;

	$('#to-recover').click(function(){
		login.fadeTo(speed,0.01).css('z-index','100');
		recover.fadeTo(speed,1).css('z-index','200');
	});

	$('#to-login').click(function(){
		recover.fadeTo(speed,0.01).css('z-index','100');
		login.fadeTo(speed,1).css('z-index','200');
	});
    
    if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
        $('input[placeholder]').each(function(){ 
       
        var input = $(this);       
       
        $(input).val(input.attr('placeholder'));
               
        $(input).focus(function(){
             if (input.val() == input.attr('placeholder')) {
                 input.val('');
             }
        });
       
        $(input).blur(function(){
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.val(input.attr('placeholder'));
            }
        });
    });

        
        
    }
});
//验证管理员信息
function checkLogin() {
	var pname=document.getElementById("admin_name").value;
	var psw=document.getElementById("admin_psw").value;
	if(pname.length<6 ||psw.length<6) {
		$('#admin_error').modal('show');
	return false;
	}
}
//正则表达式限制用管理员户名和密码输入
$(function () {
	$('#admin_name').keyup(function () {
		//限制只能是数字
		this.value = this.value.replace(/[^a-zA-Z\d]/g,'');
	})
	$('#admin_psw').keyup(function () {
		//限制只能是数字或字母输入
		this.value = this.value.replace(/[^a-zA-Z\d]/g,'');
	})
});