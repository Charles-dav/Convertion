

function sumVal(){
    const calC = document.formCal.textview1.value
    document.querySelector('#outputKilogram').innerHTML = calC / 1000
    document.querySelector('#ounces').textContent = calC / 0.035274
}

function clearScreen(){
    document.querySelector('#outputKilogram').innerHTML = ""
    document.querySelector('#ounces').textContent = ""
    document.formCal.textview1.value = ''
}