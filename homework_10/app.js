class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
        return this._value;
    }
    getValue(){
        return this._value;
    }

    setValue(newValue) {
        this._value = newValue;
    }

}

class NumberInput extends Input {
    constructor(placeHolder){
        super(placeHolder);
        this.type = "number";
    }
}



function AddRequiredValidation(obj){
    if(!('valid' in obj)){
         obj.valid = false;
    }
    obj.setValue = function (val) {
        obj.valid = validate(val);
        obj.newValue = val;
    }
    function validate(newValue) {
        return (typeof(newValue) !== 'undefined') + `, because of required validator`;
    }
}

function AddMaxLengthValidation(obj, max) {
    AddRequiredValidation.call(this, obj);
    if (!('valid' in obj)) {
        obj.valid = false;
    }
    obj.setValue = function (val) {
        obj.valid = validate(val);
        console.log(val);
        obj.newValue = val;
    }
    function validate(newValue) {
        return (newValue.toString().length <= max) + `,  because of max length validator`;
    }
}
function AddNumberValidation(obj) {
    AddRequiredValidation.call(this, obj);
    if (!('valid' in obj)) {
        obj.valid = false;
    }
    obj.setValue = function (val) {
        obj.valid = validate(val);
        console.log(val);
        obj.newValue = val;
    }
    function validate(newValue) {
        return (typeof (newValue) === "number") +`, because of number validator`;
    }
}
let numberInput = new NumberInput("Type numbers...");
// AddRequiredValidation(numberInput);
// AddMaxLengthValidation(numberInput, 3);
// AddNumberValidation(numberInput);


//  Then you can create add validation decorators and add functionality to numberInput
//  AddRequiredValidation Decorator that add required validation
//  AddMaxLengthValidation Decorator that add max length validation
//  AddNumberValidation Decorator for only number values validation


// The desired behaviour would be
// console.log(numberInput.valid) ---> false, because of required validator
// numberInput.setValue("1");
// console.log(numberInput.valid) ---> false, because of number validator
// numberInput.setValue(1);
// console.log(numberInput.valid) ---> true, all validators pass
// numberInput.setValue(1111111111111111111111111111);
// console.log(numberInput.valid) ---> false, because of max length validator

// Notice after applying some validator to an object, it gets additional "valid" property;



