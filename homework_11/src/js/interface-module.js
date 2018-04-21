let calc = document.querySelector('.calculator');

let form = document.createElement('form');
form.className = 'calc_form';

calc.appendChild(form);

let firstNum = document.createElement('div');
firstNum.className = 'calc_row';
form.appendChild(firstNum);

let numOne = document.createElement('input');
numOne.className = 'calc_display';
numOne.setAttribute('placeholder', 'Please, enter first number');
numOne.setAttribute('type', 'number');
firstNum.appendChild(numOne);

let secondNum = document.createElement('div');
secondNum.className = 'calc_row';
form.appendChild(secondNum);

let numTwo = document.createElement('input');
numTwo.setAttribute('placeholder', 'Please, enter second number');
numTwo.setAttribute('type', 'number');
numTwo.className = 'calc_display';
secondNum.appendChild(numTwo);

let action = document.createElement('div');
action.className = 'calc_row';
form.appendChild(action);

let btnAdd = document.createElement('button');
btnAdd.className = 'calc_key calc_plas';
btnAdd.textContent = '+';
action.appendChild(btnAdd);

let btnMinus = document.createElement('button');
btnMinus.className = 'calc_key calc_minus';
btnMinus.textContent = '-';
action.appendChild(btnMinus);

let btnMult = document.createElement('button');
btnMult.className = 'calc_key calc_x';
btnMult.textContent = 'x';
action.appendChild(btnMult);

let btnDivision = document.createElement('button');
btnDivision.className = 'calc_key calc_division';
btnDivision.textContent = '/';
action.appendChild(btnDivision);

export default {
 numOne: numOne,
 numTwo: numTwo,
 btnAdd: btnAdd,
 btnMinus: btnMinus,
 btnMult: btnMult,
 btnDivision: btnDivision
}