
const display1 = document.querySelector('.kilo')
const display2 = document.querySelector('.ounce')

function sumVal(){
    const calC = document.formCal.textview1.value
    document.querySelector('#outputKilogram').innerHTML = calC / 1000
    document.querySelector('#ounces').textContent = calC / 0.035274
    display1.classList.add('display');
    display2.classList.add('display');
}

function clearScreen(){
    document.querySelector('#outputKilogram').innerHTML = "";
    document.querySelector('#ounces').textContent = "";
    document.formCal.textview1.value = '';
    display1.classList.remove('display');
    display2.classList.remove('display');
}

