function CW(str) { 
  return str.split(' ').length;
}
var NewStr = 'Университет ИТМО';
document.write(NewStr,'<br>');
document.write('Количество символов: ', NewStr.length,'<br>');
document.write('Количество слов: ',CW(NewStr),'<br>');

var url = window.location;
var urlStr = url.href;
document.write('URL: ',url.href,'<br>');
document.write('Протокол: ',url.protoсol,'<br>');
document.write('Название файла: ',url.pathname.split('.')[0].replace('/',''),'<br>');
document.write('Расширение файла: ',url.pathname.split('.')[1],'<br>');

var anch = 'AHKOP';
var newAnch = 'AHKOP1';
document.write('<br>','Новый анкор: ',anch.anchor('a1'),'<br>');
document.write('Еще один анкор: ',newAnch.anchor('a2'),'<br>');

document.write('<a href="https://www.vk.com" target="_blank" id="vk">VK</a><br>');
document.write('<a href="https://www.mail.ru" target="_blank" id="mail">Mail</a><br>');
document.write('<a href="https://store.steampowered.com" target="_blank" id="steam">Steam</a><br>')

document.write('<img id = "vkP" src="vk.png" width="100" height="100">','<br>');
document.write('<img id = "mailP" src="mail.png" width="300" height="100">','<br>');
document.write('<img id = "steamP" src="steam.png" width="150" height="150">','<br>')

document.write('Кол-во анкоров: ', document.anchors.length,'<br>');
document.write('Кол-во ссылок: ', document.links.length,'<br>');

document.write('innerHTML первого анкора: ', document.anchors[0].innerHTML, '<br>');
document.write('Кол-во картинок: ', document.images.length,'<br>');
document.write('Ширина первой картинки: ', document.images[0].width,'<br>');

document.write('Ширина самой широкой картинки: ', Math.max.apply(Math, Array.from(document.images).map(function(images){return images.width;})),'<br>');

const Sum = (accumulator, currentValue) => accumulator + currentValue;
document.write('Сумма всех высот картинок: ',Array.from(document.images).map(function(images){return images.height;}).reduce(Sum),'<br>');


for (let i = 0;i<10;i++)
{
  document.write('<form name = "Form',i,'" id= "',i,'">');
  var g = i+1;
  document.write('<input type="login"></input>');
  document.write('<input type="button" value="Имя формы" onClick="alert(',g,')"class = "reg"></input>');
  document.write('<input type="button" value="Принадлежность" onClick="alert(',i,')" class = "whois"></input>');
   
   document.write('<input type="reset" class = "reset"></input>');
document.write('<input type="button" value="Пок. кол-во. полей" onClick="alert(',document.forms[i].childElementCount+1,')" class="showMe"></input>','</form>');
}

document.write('Имена всех четных форм: ');
for (let i = 0;i<10;i++)
{
    modYesNO = (i%2==0)?document.write('Form',i,', '):0;
}
document.write('<br>');

document.write('<a href = "https://www.google.com">Google</a>,<br>');
document.write('<a href = "https://www.YouTube.com">YouTube</a><br>');
document.write('<a href = "https://www.Facebook.com">Facebook</a><br>');
document.write('<a href = "https://www.Baidu.com">Baidu</a><br>');
document.write('<a href = "https://www.yahoo.com">Baidu</a><br>');
document.write('<a href = "https://www.Instagram.com">Instagram</a><br>');
document.write('<a href = "https://www.twitter.com">Twitter</a><br>');
document.write('<a href = "https://www.VK.com">VK</a><br>');
document.write('<a href = "https://www.wikipedia.org">Wikipedia</a><br>');
document.write('<a href = "https://www.twitter.com">Twitter</a><br>');
document.write('<a href = "https://www.yandex.ru">Yandex</a><br>');
document.write('<a href = "https://www.Amazon.com">Amazon</a>');

document.write('<table><tr><th>Уникальный текст</th><th>Количество ссылок</th><th>Href</th></tr>');
var Taged = document.getElementsByTagName('a');
for (let i = 0;i<Taged.length;i++)
{
  var count = 0;
  for (let k = 0;k<Taged.length;k++)
  {
    if (Taged[i].innerHTML == Taged[k].innerHTML)
    {
      count +=1; 
    }
  }
  document.write('<tr><td>',Taged[i].innerHTML,
  '</td><td>',count,'</td><td>',Taged[i],'</td></tr>')
  }
document.write('</table>');