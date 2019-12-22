function createTable(ttt){
var row = document.getElementById('rows').value;
var col = document.getElementById('columns').value;
var table = document.createElement('table');
table.id = 'table';
for(let i=0; i<row; i++){
var tr = document.createElement('tr');
for(let j=0; j<col; j++){
var td = document.createElement('td');
var newFormInTable = document.createElement('form');
td.appendChild(newFormInTable);

var text = document.createElement('input');
text.type = 'text';
newFormInTable.appendChild(text);

var newbtn = document.createElement('input');
newbtn.type = 'button';
newbtn.value = 'Сохранить';
newbtn.setAttribute("onclick", "safeInTable(this)");
newFormInTable.appendChild(newbtn);

tr.appendChild(td);
}
table.appendChild(tr);
}
ttt.parentNode.remove();

createChangeBorder();
addHead();
removeString();
random();
deleteTable();

document.body.appendChild(table);
}

function safeInTable(aaa){
var x = aaa.parentNode.childNodes[0].value;
var newDiv = document.createElement('div');
newDiv.innerHTML = x;
aaa.parentNode.parentNode.appendChild(newDiv);
aaa.parentNode.remove();
}

function createChangeBorder(){
var form = document.createElement('form');
document.body.appendChild(form);

var x = document.createElement('div');
x.innerHTML = 'Ширина таблицы: ';
form.appendChild(x);

var x = document.createElement('input');
x.type = 'number';
x.setAttribute("onchange", "document.getElementById(\'submitChangeBorder\').value = `Применить ${value} px и рамка ${document.getElementById(\'select\').value}`");
x.id = 'borderPX'
form.appendChild(x);

var x = document.createElement('div');
x.innerHTML = 'Вид рамки: ';
form.appendChild(x);

x = document.createElement('select');
x.setAttribute("onchange", "document.getElementById(\'submitChangeBorder\').value = `Применить ${document.getElementById(\'borderPX\').value} px и рамка ${value}`");
x.id = 'select';
form.appendChild(x);

var x1 = document.createElement('option');
x1.value = 'Solid';
x1.setAttribute('label', "Solid");
x.appendChild(x1);

var x1 = document.createElement('option');
x1.value = 'Dotted';
x1.setAttribute('label', "Dotted");
x.appendChild(x1);

var x1 = document.createElement('option');
x1.value = 'Double';
x1.setAttribute('label', "Double");
x.appendChild(x1);

var x1 = document.createElement('option');
x1.value = 'Dashed';
x1.setAttribute('label', "Dashed");
x.appendChild(x1);

var x1 = document.createElement('option');
x1.value = 'Inset';
x1.setAttribute('label', "Inset");
x.appendChild(x1);

var x = document.createElement('div');
form.appendChild(x);

x = document.createElement('input');
x.type = 'button';
x.setAttribute("onclick", "changeBorder(this)");
x.id = 'submitChangeBorder';
x.value = 'Применить';
form.appendChild(x);

}

function changeBorder(ttt){
var x = ttt.parentNode.childNodes[1].value;
var y = ttt.parentNode.childNodes[3].value;
var z = x+'px'+' '+y;
ttt.parentNode.parentNode.childNodes[7].style.border = z;
}



function addHead(){
var form = document.createElement('form');
document.body.appendChild(form);

var x = document.createElement('div');
x.innerHTML = 'Добавить заголовок таблицы: ';
form.appendChild(x);

var x = document.createElement('input');
x.type = 'text';
form.appendChild(x);

x = document.createElement('input');
x.type = 'button';
x.value = 'Добавить';
x.setAttribute("onclick", "addHeadToTable(this)");
form.appendChild(x);
}

function addHeadToTable(ttt){
var x = document.createElement('caption');
x.innerHTML = ttt.parentNode.childNodes[1].value;

var tr =ttt.parentNode.parentNode.childNodes[7].childNodes[0];
ttt.parentNode.parentNode.childNodes[7].insertBefore(x, tr);
}

function removeString(){
var form = document.createElement('form');
document.body.appendChild(form);

var x = document.createElement('div');
x.innerHTML = 'Удалить строку под номером: ';
form.appendChild(x);

var x = document.createElement('input');
x.type = 'number';
form.appendChild(x);

var x = document.createElement('input');
x.type = 'button';
x.value = "Удалить";
x.setAttribute("onclick", "deleteString(this)");
form.appendChild(x);
}

function deleteString(ttt){
var row = document.getElementById('table').getElementsByTagName('tr').length;
if(ttt.parentNode.childNodes[1].value>row){
alert("Слишком большое значение!");
return;
}
var x = ttt.previousSibling.value;
document.getElementById('table').getElementsByTagName('tr')[x-1].remove();
}

function random(){
var form = document.createElement('form');
document.body.appendChild(form);

var x = document.createElement('input');
x.type = 'button';
x.value = 'Magic';
x.setAttribute("onclick", "randomMake()");
form.appendChild(x);
}

function randomMake(){
var row = document.getElementById('table').getElementsByTagName('tr').length;
var col = document.getElementById('table').getElementsByTagName('td').length;
console.log(row);
col = col/row;
console.log(col);
var i = randomInt(0, row-1);
var j = randomInt(0, col-1);
var r = randomInt(0, 255);
var g = randomInt(0, 255);
var b = randomInt(0, 255);
console.log(i);
console.log(j);
console.log(document.getElementById('table'));
console.log(document.getElementById('table').getElementsByTagName('tr')[i]);
console.log(document.getElementById('table').getElementsByTagName('tr')[i].getElementsByTagName('td')[j]);
document.getElementById('table').getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.backgroundColor = 'rgb('+r+','+g+','+b+')';
var r2 = randomInt(0, 255);
var g2 = randomInt(0, 255);
var b2 = randomInt(0, 255);
document.getElementById('table').getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.color = 'rgb('+r2+','+g2+','+b2+')';
fS = randomInt(15, 25);
fS = fS+'px';
document.getElementById('table').getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.fontSize = fS;
if(randomInt(0,1)==0){
document.getElementById('table').getElementsByTagName('tr')[i].getElementsByTagName('td')[j].innerHTML = "<form><input type='text'><input type='button' value='Сохранить' onclick='safeInTable(this)>'</form>"
}
}

function randomInt(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function deleteTable(){
var form = document.createElement('form');
document.body.appendChild(form);

var x = document.createElement('input');
x.type = 'button';
x.value = 'Удалить таблицу';
x.setAttribute("onclick", "removeTable(this)");
form.appendChild(x);
}

function removeTable(ttt){
ttt.parentNode.nextSibling.remove();
ttt.parentNode.previousSibling.remove();
ttt.parentNode.previousSibling.remove();
ttt.parentNode.previousSibling.remove();
ttt.parentNode.previousSibling.remove();
ttt.parentNode.remove();

var form = document.createElement('form');
document.body.appendChild(form);

var x = document.createElement('div');
x.innerHTML = 'Количество строк: ';
form.appendChild(x);

var x = document.createElement('input');
x.type = 'number';
x.id = 'rows';
form.appendChild(x);

var x = document.createElement('div');
x.innerHTML = 'Количество столбцов: ';
form.appendChild(x);

var x = document.createElement('input');
x.type = 'number';
x.id = 'columns';
form.appendChild(x);

var x = document.createElement('div');
form.appendChild(x);

var x = document.createElement('input');
x.type = 'button';
x.value = 'Создать таблицу';
x.setAttribute("onclick", "createTable(this)");
form.appendChild(x);
}


