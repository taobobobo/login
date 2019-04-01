$(function(){
var deg=0;
setTimeout(function(){
   $(".wrap").css({"transform":"translateY(0px)","opacity":"1"});
},10)
setTimeout(function(){
   $(".register_box").css({"transform":"translateY(0px)","opacity":"1"});
},10)

$(".login_logo").mouseenter(function(){
   deg+=180;
   $(".login_logo_img").css("transform","rotateY("+deg+"deg)");
 
});

$(".login_name").focus(function(){
   $(".name_icon").css("background-position","5px -56px");
   deg+=180;
   $(".login_logo_img").css("transform","rotateY("+deg+"deg)");
});
$(".login_name").blur(function(){
    $(".name_icon").css("background-position","5px 8px");
 });
 $(".login_password").focus(function(){
   $(".psd_icon").css("background-position","5px -191px");
   deg+=180;
   $(".login_logo_img").css("transform","rotateY("+deg+"deg)");
});
$(".login_password").blur(function(){
   $(".psd_icon").css("background-position","5px -120px");
});
$(".yzm_txt").click(function(){
   var show="";
  $(".yzm_txt").css({"letter-spacing":"10px","font-size":"24px","font-style":"italic"});
  var str="abcdefghigklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   for(var i=0;i<4;i++){
      var index=parseInt(Math.random()*(str.length-1));
      show+=str.substr(index,1);
      $(".yzm_txt").html(show);
   }
});

var json={
   '.register_name':false,
        '.register_password':false,
        '.register_repassword':false,
}

pdFn(".register_name",/^\w{6,18}$/);
pdFn(".register_password",/^\w{6,18}$/);
function pdFn(oClass,reg){
$(oClass).blur(function(){
   var name=$(oClass).val();
   if(name.match(reg)){
      $(oClass).next().css("background-image","url(dui.png)");
      json[oClass]=true;
   }else{
      $(oClass).next().css("background-image","url(cuo.png)");
      json[oClass]=false;
   }
})
}
$(this).blur(function(){
   if(($(this).val()==$(".register_password").val())&&json[".register_password"]==true){
      $(this).next().css("background-image","url(dui.png)");
      json[".register_repassword"]=true;
   }
   else if(($(this).val()!=$(".register_password").val())){
      $(this).next().css("background-image","url(cuo.png)");
      json[".register_repassword"]=false;
   }
});

$(".register_btn").click(function(){
   for(var i in json){
     if( json[i]==false){
        if(i=='.register_name'){$('.register_name').next().css("background-image","url(cuo.png)");}
        else if(i=='.register_password'){$('.register_password').next().css("background-image","url(cuo.png)");}
        else if(i=='.register_repassword'){$('.register_repassword').next().css("background-image","url(cuo.png)");}
        $(i).parent().parent().nextAll().children().find("b").css("background-image","none");
      return false;
      }  
   }
   var txt=$(".yzm_txt").html().toUpperCase();
   if($(".register_yzm").val().toUpperCase()!=txt){
     $(".register_yzm").css("color","red");
      alert("验证码错误!");
      return false;
   }
});
$(".register_yzm").focus(function(){
   $(this).css("color","#000");
})

});
