const css_1 = document.getElementById('1');
const css_2 = document.getElementById('2');
const css_3 = document.getElementById('3');
const css_4 = document.getElementById('4');

css_1.disabled = true;
css_2.disabled = true;
css_3.disabled = true;
css_4.disabled = true;

function schimbare() {
    var value = document.getElementById('puncte').value;
    
    const display_1 = document.getElementById('punct_1');
    const display_2 = document.getElementById('punct_2');
    const display_3 = document.getElementById('punct_3');
    const display_4 = document.getElementById('punct_4');

    

    if(value == '1') {
        css_2.disabled = true;
        css_3.disabled = true;
        css_4.disabled = true;
        css_1.disabled = false;
        display_1.style.display = 'flex';
        display_2.style.display = 'none';
        display_3.style.display = 'none';
        display_4.style.display = 'none';
    }else if(value == '2') {
        css_1.disabled = true;
        css_3.disabled = true;
        css_4.disabled = true;
        css_2.disabled = false;
        display_1.style.display = 'flex';
        display_2.style.display = 'flex';
        display_3.style.display = 'none';
        display_4.style.display = 'none';
    }else   if(value == '3') {
        css_2.disabled = true;
        css_1.disabled = true;
        css_4.disabled = true;
        css_3.disabled = false;
        display_1.style.display = 'flex';
        display_2.style.display = 'flex';
        display_3.style.display = 'flex';
        display_4.style.display = 'none';
    }else if(value == '4') {
        css_2.disabled = true;
        css_3.disabled = true;
        css_1.disabled = true;
        css_4.disabled = false;
        display_1.style.display = 'flex';
        display_2.style.display = 'flex';
        display_3.style.display = 'flex';
        display_4.style.display = 'flex ';
    }
}

function varsta_i() {
    var value = document.getElementById('v_i').value;
    var varsta = document.getElementById('varsta_i');
    if((!isNaN(value)) && value) {
        varsta.innerHTML = value + ' de ani';
    }
    else {
        varsta.innerHTML = '';
    }
}

function varsta_1() {
    var value = document.getElementById('v_1').value;
    var varsta = document.getElementById('varsta_1');
    if((!isNaN(value)) && value) {
        varsta.innerHTML = value + ' de ani';
    }
    else {
        varsta.innerHTML = '';
    }
}

function varsta_2() {
    var value = document.getElementById('v_2').value;
    var varsta = document.getElementById('varsta_2');
    if((!isNaN(value)) && value) {
        varsta.innerHTML = value + ' de ani';
    }
    else {
        varsta.innerHTML = '';
    }
}

function varsta_3() {
    var value = document.getElementById('v_3').value;
    var varsta = document.getElementById('varsta_3');
    if((!isNaN(value)) && value) {
        varsta.innerHTML = value + ' de ani';
    }
    else {
        varsta.innerHTML = '';
    }
}

function varsta_4() {
    var value = document.getElementById('v_4').value;
    var varsta = document.getElementById('varsta_4');
    if((!isNaN(value)) && value) {
        varsta.innerHTML = value + ' de ani';
    }
    else {
        varsta.innerHTML = '';
    }
}

function varsta_f() {
    var value = document.getElementById('v_f').value;
    var varsta = document.getElementById('varsta_f');
    if((!isNaN(value)) && value){
        varsta.innerHTML = value + ' de ani';
    }
    else {
        varsta.innerHTML = '';
    }
}

function suma_i() {
    var value = document.getElementById('s_i').value;
    var varsta = document.getElementById('suma_i');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = value + moneda;
    }
    else {
        varsta.innerHTML = '';
    }
}

function suma_1() {
    var value = document.getElementById('s_1').value;
    var varsta = document.getElementById('suma_1');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = value + moneda;
    }
    else {
        varsta.innerHTML = '';
    }
}

function suma_2() {
    var value = document.getElementById('s_2').value;
    var varsta = document.getElementById('suma_2');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = value + moneda;
    }
    else {
        varsta.innerHTML = '';
    }
}

function suma_3() {
    var value = document.getElementById('s_3').value;
    var varsta = document.getElementById('suma_3');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = value + moneda;
    }
    else {
        varsta.innerHTML = '';
    }
}

function suma_4() {
    var value = document.getElementById('s_4').value;
    var varsta = document.getElementById('suma_4');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = value + moneda;
    }
    else {
        varsta.innerHTML = '';
    }
}

function suma_f() {
    var value = document.getElementById('s_f').value;
    var varsta = document.getElementById('suma_f');
    var moneda = document.getElementById('moneda').value;
    if(value){
        varsta.innerHTML = value + moneda;
    }
    else {
        varsta.innerHTML = '';
    }
}

function plus_1() {
    var value = document.getElementById('p_1').value;
    var varsta = document.getElementById('plus_1');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = '+' + value + moneda + ' / an';
    }
    else {
        varsta.innerHTML = '';
    }
}

function plus_2() {
    var value = document.getElementById('p_2').value;
    var varsta = document.getElementById('plus_2');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = '+' + value + moneda + ' / an';
    }
    else {
        varsta.innerHTML = '';
    }
}

function plus_3() {
    var value = document.getElementById('p_3').value;
    var varsta = document.getElementById('plus_3');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = '+' + value + moneda + ' / an';
    }
    else {
        varsta.innerHTML = '';
    }
}

function plus_4() {
    var value = document.getElementById('p_4').value;
    var varsta = document.getElementById('plus_4');
    var moneda = document.getElementById('moneda').value;
    if (value) {
        varsta.innerHTML = '+' + value + moneda + ' / an';
    }
    else {
        varsta.innerHTML = '';
    }
}

function functii() {
    suma_i();
    suma_1();
    suma_2();
    suma_3();
    suma_4();
    suma_f();
    plus_1();
    plus_2();
    plus_3();
    plus_4();

}