let name = prompt("Как Вас зовут? ","");
alert ("Привет, " + name);

let age = +prompt("Сколько Вам лет?");
switch(age){
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу!!!');
        break;
    default:
        alert('Не имею понятия, что с Вами делать!')
}
function changed(){
    let element = document.getElementById("el2");
    element.classList.toggle("title");
    element.textContent = element.textContent == "На самом деле, тут только 7 книг" ? "100 книг, которые должен прочитать каждый" : 
    "На самом деле, тут только 7 книг";
}

let btn = document.getElementById("btn");
console.log(btn);
btn.addEventListener('click', changed)

let btn2 = document.getElementById("btn2");
console.log(btn2);
btn2.addEventListener('click', changeList);
function changeList(){
    let element = document.getElementById("el3");
    element.classList.toggle("title");
}