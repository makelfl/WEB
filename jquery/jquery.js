document.write('<input type="button"  class="but"  value="Отмена действий 1 и 2 п."onClick="remov()"  ></input>');
function remov(){
$(".for").attr("disabled" ,false);
$("div").remove();
};

jQuery(function(){
$("a.lin1:link").css("color", "red");
$("a.lin1").css("font-size" ,"20px");
$("a.lin2:link").css("color", "Darkblue");
$("a.lin2").css("font-size" ,"20px");
$("a.lin2").css("font-style" ,"italic"); 
$("a.lin2").css("font-weight" ,"bolder"); 
$("p.newp").css("color", "DarkGreen");
$("p.newp").css("font-size" ,"25px");
$("p.newp").css("font-style" ,"oblique"); 
$("p.newp").css("font-weight" ,"lighter"); 
$(".for").attr("disabled" ,true); 
$("a").prepend("<div> &#8599; </div>");
$("a").attr("target", "_blank");

$('a[href^="http://"]').each(function(){ 
            var oldUrl = $("a").attr("href"); 
            var newUrl = oldUrl.replace("http://", "https://"); 
            $("a").attr("href", newUrl); 
        });
  $(".inf1").click(function(){
  $(".ttxt1").fadeOut(3000).fadeIn(1000);
  });
  $(".inf2").click(function(){
  $(".ttxt2").fadeTo(1500,0.5);
   });
  $(".inf3").click(function(){
   $(".ttxt3").slideUp(3000).slideDown(1000);
   });
   $(".inf4").click(function(){
   $(".ttxt4").slideToggle(1200);
   });
   $(".inf5").click(function(){
   $(".ttxt5").slideUp().fadeIn(1500);
   }); 
  
});


for (let i = 0;i<10;i++)
{
  document.write('<form  name = "Form',i,'" id= "',i,'">');
  var g = i+1;
  document.write('<input  class="for" type="login"></input>');
  document.write('<input type="button"  class="for" value="Имя формы" onClick="alert(',g,')"  ></input>');
  document.write('<input type="button"  class="for" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')" ></input>','</form>');
}
