
document.write('Показать текст в браузер с помощью document.write()','<br>');
document.write('<b>  <i>Показать отформатированный текст в браузер с помощью document.write() </b> </i>','<br>');

var anch = 'AHKOP';
var newAnch = 'AHKOP1';
document.write('<br>','Новый анкор: ',anch.anchor('a1'),'<br>');
document.write('Еще один анкор: ',newAnch.anchor('a2'),'<br>');
document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('innerHTML первого анкора: ', document.anchors[0].innerHTML, '<br>');
for (let i = 0;i<10;i++)
{
  document.write('<form name = "Form',i,'" id= "',i,'">');
  var g = i+1;
  document.write('<input type="login"></input>');
  document.write('<input type="button" value="Имя формы" onClick="alert(',g,')"class = "showMe"></input>');
   document.write('<input type="button" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')" class="showMe"></input>','</form>');
}
 document.write('Кол-во форм: ', document.forms.length,'<br>');
 document.write('Имя первой формы: ' ,document.forms[0].name,'<br>' );
document.write('<img id = "vkP" src="vk.png" width="50" ;height="50">','<br>');
document.write('<img id = "mailP" src="mail.png" width="50" ;height="50">','<br>');
document.write('<img id = "steamP" src="steam.png" width="50" ;height="50">','<br>')
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Айди первого изображения: ', document.images[0].id,'<br>');

document.write('<a href = "https://www.google.com" id ="ONE">Google</a>,<br>');
document.write('<a href = "https://www.YouTube.com">YouTube</a><br>');
document.write('<a href = "https://www.Facebook.com">Facebook</a><br>');
document.write('<a href = "https://www.Baidu.com">Baidu</a><br>');
document.write('Количество ссылок: ', document.links.length,'<br>');
document.write('Айди первой ссылки: ', document.links[0].id,'<br>');
document.write('Домен загрузки документа: ',document.domain,'<br>');
document.write('URL документа, который загрузил файл: ',document.referrer,'<br>');
document.write('URL документа: ',document.URL,'<br>');
document.write('Заголовок докумнта: ',document.title,'<br><br>');
document.write('Объект Кнопка<br>');
document.write('<input type="button"  value="ЖМЯК" onclick="this.disabled=true;"></input>','<br>');
function alertName()
{
alert(document.getElementById("but").name)
}
function alertType()
{
alert(document.getElementById("but1").type)
}
function alertValue()
{
alert(document.getElementById("but2").value)
}
function alertId()
{
alert(document.getElementById("but3").form.id)
}
function formR()
{
document.getElementById("Form1").reset();
}
function formSubmit()
{
document.getElementById("Form1").submit();
}
function alignImg()
{
document.getElementById("vrP").align="left";
}
function addBorder()
{
document.getElementById("vrP").border="2";
}
function changeImg()
{
document.getElementById("vrP").width="150";
document.getElementById("vrP").height="150";
}
function nameImg()
{
alert(document.getElementById("vrP").name);
}
function changesrc()
{
document.getElementById("vrP").src="steam.png";
}
function Buton(event)
{
if (event.button==2)
  alert("правая кнопку мыши!");
else
  alert("левая кнопку мыши");
}
function Buton1(event)
{
alert(event.keyCode);
}
function Cur(event)
{
var x=event.clientX;
var y=event.clientY;
alert("Координата X: " + x + ", Координата Y: " + y);
}
function Cur1(event)
{
var x=event.screenX;
var y=event.screenY;
alert("Координата X: " + x + ", Координата Y: " + y);
}
function EventType(event)
{ 
alert(event.type);
}

document.write('<input type="button" id="but" value="Имя кнопки" name="but2"onclick="alertName()"></input>','<br>');
document.write('<input type="button" id="but1" value="Тип кнопки" name="but2"onclick="alertType()"></input>','<br>');
document.write('<input type="button" id="but2" value="Текст кнопки" name="but2"onclick="alertValue()"></input>','<br>');
document.write('<form id="form1">')
document.write('<input type="button" id="but3" value="Айди формы" name="but2"onclick="alertId()"></input>','</form>','<br>');

document.write('<form action="123.txt" enctype="text/plain" name = "Form" id= "Form1">');
document.write('<input type="text" id ="txt"></input>');
document.write('Значение первого элемента: ',document.getElementById("txt").type,'<br>');
document.write('<input type="button" id="but10" value="1" onClick="alert(1)"class = "showMe"></input>');
document.write('Значение второго элемента: ',document.getElementById("but10").type ,' ' , document.getElementById("but10").value ,'<br>');
document.write('<input type="button"  id="but11" value="2" onClick="alert(2)" class="showMe"></input>')
document.write('<input type="reset" class = "reset"></input>');
document.write('<input value="Отправить форму" type="button"  onclick="formSubmit()" class = "showMe"></input>');


document.write('Значение третьего элемента: ',document.getElementById("but11").type ,' ' , document.getElementById("but11").value ,'</form>','<br>');
document.write('Значение атрибута action: ',document.getElementById("Form1").action );
document.write('Значение атрибута enctype: ',document.getElementById("Form1").enctype ,'<br>');
document.write('Количество элементов в форме: ',document.getElementById("Form1").length ,'<br>');
document.write('Метод отправки элементов: ',document.getElementById("Form1").method ,'<br>');
document.write('Имя формы: ',document.getElementById("Form1").name ,'<br>');

document.write('Объект Изображение (image)','<br>');
document.write('<img id = "vrP" src="vk.png" name="VK.COM" alt="VK" width="100" align="right" ;height="100">','<br>');
document.write('<input type="button"  id="" value="Выровнять изображение" onclick="alignImg()" class="showMe"/>','<br>');
document.write('Альтернативный текст: ',document.getElementById("vrP").alt,'<br>');
document.write('<input type="button"  id="" value="Добавить границы" onclick="addBorder()" class="showMe"/>','<br>');
document.write('<input type="button"  id="" value="Изменить размеры" onclick="changeImg()" class="showMe"/>','<br>');
document.write('<input type="button"  id="" value="Название изображения" onclick="nameImg()") class="showMe"/>','<br>');
document.write('<input type="button"  id="" value="изменить источник" onclick="changesrc()") class="showMe"/>','<br>');

document.write('Объект Событие (event)','<br>');

document.write('<input type="button"  id="" value="Какая клавиша" onmousedown="Buton(event)" class="showMe"/>','<br>');
document.write('<input type="button" id="" value="Код клавишы" onkeyup="Buton1(event)" class="showMe"/> ','<br>' );
document.write('<input type="button"  id="" value="Координаты" onmousedown="Cur(event)" class="showMe"/>','<br>');
document.write('<input type="button"  id="" value="Координаты относительно экрана" onmousedown="Cur1(event)" class="showMe"/>','<br>');
document.write('<input type="button"  id="" value="Событие" onmousedown="EventType(event)" class="showMe"/>','<br>');




