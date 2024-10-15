import {MiniMaple} from "./miniMaple.js"

document.addEventListener('DOMContentLoaded',setup)

function setup() {
    document.getElementById('demoButton').onclick = diff
}



function addSomething(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = `I was created by JS! There are already ${count} of my friends!`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}

function diff() {
    polynom_test = document.getElementById('Differentiation').value
    console.log(polynom_test)
    const polynom = new MiniMaple();
    polynom.set(polynom_test);
    document.getElementById('result').value= polynom.differentiation();
}
