class Input {
    constructor(placeHolder) {
        this.placeHolder = placeHolder || "Type...";
        this._value = "";
    }

    get value() {
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


function AddRequiredValidation(obj) {
    if (!("valid" in obj)) {
        obj.valid = false;
    }
    obj.setValue = function(value){
    obj.valid = validate(value);
    obj.valid = message(obj.valid);
    }
    function validate(value){
        return typeof value !== "undefined" && value !=="";
     }
    function message(prop) {
        if (!obj.valid) {
            return `false, you did not enter a number`
        } else {
            return obj.valid;
        }
    }

}


function AddMaxLengthValidation(obj, max) {
    if (!("valid" in obj)) {
        obj.valid = false;
    }
    obj.setValue = function(value){
    obj.valid = validate(value);
    obj.valid = message(obj.valid);
    }
    function validate(value) {
        return (value.toString().length < max);
    }
    function message(prop){
        if(!obj.valid){
            return `false, because this bigger then max length ${max}`
        }else{
            return obj.valid;
        }
    }
}


function AddNumberValidation(obj) {
    if (!("valid" in obj)) {
        obj.valid = false;
    }
    obj.setValue = function(value){
    obj.valid = validate(value);
    obj.valid = message(obj.valid);
    }
    function validate(value) {
        return typeof(value) === "number";
    }
    function message(prop) {
        if (!obj.valid) {
            return `false, because this not a number`
        } else {
            return obj.valid;
        }
    }
}


let numberInput = new NumberInput("Type numbers...");


AddRequiredValidation(numberInput);
console.log(numberInput.valid)
//false
numberInput.setValue(1)
console.log(numberInput.valid)
// true
numberInput.setValue("")
console.log(numberInput.valid)
//"false, you did not enter a number"


AddMaxLengthValidation(numberInput, 9);
numberInput.setValue(12345)
console.log(numberInput.valid)
//true
numberInput.setValue(123456789)
console.log(numberInput.valid)
//false, because this bigger then max length 9


AddNumberValidation(numberInput);
numberInput.setValue(12345)
console.log(numberInput.valid)
//true
numberInput.setValue('epam')
console.log(numberInput.valid)
//"false, because this not a number"
numberInput.setValue('1')
console.log(numberInput.valid)
//"false, because this not a number"

AddRequiredValidation(numberInput);
AddMaxLengthValidation(numberInput, 9);
AddNumberValidation(numberInput);
numberInput.setValue(1)
console.log(numberInput.valid)
//true
