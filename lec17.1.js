for (let li of document.querySelectorAll('li')) {
    let name = li.firstChild.data;// переберемо кожен елемент списку
    let k = li.getElementsByTagName('li').length; //підрахуємо кількість
    alert(name);
}
alert(k);