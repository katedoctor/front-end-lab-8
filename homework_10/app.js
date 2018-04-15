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

let numberInput = new NumberInput("Type numbers...");

NumberInput.decorators = {};

NumberInput.decorators.AddRequiredValidation = {
    valid: function(){
        let value = this._super.getValue();
        if(typeof(value) === "undefined" ){
            return `false, because of required validator`;
            return false;
        }
    }
};
NumberInput.decorators.AddRequiredValidation = {
    valid: function () {
        let value = this._super.getValue();
        const max = 10;
    }
};
NumberInput.decorators.AddRequiredValidation = {
     valid: function () {
        let value = this._super.getValue();
    }
}


// numberInput = AddRequiredValidation(numberInput);

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



