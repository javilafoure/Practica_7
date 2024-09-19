const pantalla = document.querySelector('#display');
const buttons = document.querySelector('.boton')

buttons.addEventListener('click', operacion);

function operacion(e) {
    if (e.target.tagName === 'BUTTON') {
        let value = e.target.value
        let pv = pantalla.value;
        let operador = (value === '-' || value === '/' || value === '*' || value === '+')

        if (value === 'AC') {
            pantalla.value = pv.slice(0, pv.length - 1);
            return;
        }
        if (operador && (pv.slice(-1) === '-' || pv.slice(-1) === '/' || pv.slice(-1) === '+' || pv.slice(-1) === '*')) {
            pantalla.value = pv.slice(0, pv.length - 1) + value
            return;
        }
        if (value === '=') {
            pantalla.value = (eval(pv));
        }
        if (operador && pv === '') {
            return
        }
        console.log(value);
        if (value !== '=') {
            pantalla.value += value
        }
        //pantalla.value += value
    }

}