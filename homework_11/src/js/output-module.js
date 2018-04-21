import act from './calculating-module';
import Interface from './interface-module';

Interface.btnAdd.addEventListener('click',()=> {
  alert (act.addtion(Interface.numOne.value, Interface.numTwo.value));

})
Interface.btnMinus.addEventListener('click', () => {
  alert (act.subtraction(Interface.numOne.value, Interface.numTwo.value));
})

Interface.btnMult.addEventListener('click', () => {
  alert (act.multiplication(Interface.numOne.value, Interface.numTwo.value));
})

Interface.btnDivision.addEventListener('click', () => {
  alert (act.division(Interface.numOne.value, Interface.numTwo.value));
})