function Company({name, owner, maxCompanySize}) {
  this.name = name;
  this.owner = owner;
  this.maxCount = maxCompanySize;
  var _arrEmployee = new Array;
  var _startWork;
  var _endWork;
  var _index = 0;
  var _minSalary;
  var _historyLog = this.name + " was created in " + new Date();

  function Review(obj) {
    if (!isNaN(obj.name) || !isNaN(obj.primarySkill)) {
      console.log("Please try to add Employee instance");
    } else if (isNaN(obj.salary) || obj.salary <= 0) {
      console.log("Please try to add Employee instance");
    } else if (isNaN(obj.age) || obj.age <= 14 || obj.age >= 60) {
      console.log("Please try to add Employee instance");
    } else {
      return true;
    }
  }

  this.addNewEmployee = function(obj) {
    if(Review(obj)) {
      if(this.maxCount > _arrEmployee.length) {
        _arrEmployee.push(obj);
        obj.hire(this.name);
        _startWork = new Date();
        _historyLog += obj.name + " starts working at " + this.name + " in " + _startWork.toString() + ".\n";
      }else{
        MinSalaryEmp(_arrEmployee);
        this.removeEmployee(_index);
        _arrEmployee.push(obj);
         obj.hire(this.name);
        _startWork = new Date();
        _historyLog += obj.name + " starts working at " + this.name + " in " + _startWork.toString() + ".\n";
      }
    }
  }

  function MinSalaryEmp(arr) {
    _minSalary = arr[0].salary;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].salary < _minSalary) {
        _minSalary = arr[i].salary;
        _index = i;
      }
    }
    return _minSalary;
  }

  this.removeEmployee = function (index) {
    var obj = _arrEmployee[index];
    obj.fire(this.name);
    _endWork = new Date();
    _arrEmployee.splice(index, 1);
    _historyLog += obj.name + " end working at " + this.name + " in " + _endWork.toString() +".\n`";
  }

  this.getAverageSalary = function () {
    let sumSalary = 0;
    for (let i=0; i<_arrEmployee.length; i++) {
      sumSalary += _arrEmployee[i].salary;
    }
    return (sumSalary/_arrEmployee.length);
  }

  this.getEmployees = function() {
    return _arrEmployee;
  }

  this.getFormattedListOfEmployee = function() {
    let presentDate = new Date();
    let _timeList = (Math.floor(presentDate.getTime() - _startWork.getTime()))/1000;
    for (let i=0; i<_arrEmployee.length; i++) {
      console.log(_arrEmployee[i].name + " - works in " + this.name + _timeList + "seconds");
    }
  }

  this.getAverageAge = function() {
    let average = 0;
    for (let i=0; i<_arrEmployee.length; i++) {
      average += _arrEmployee[i].age
    }
    return (average/_arrEmployee.length);
  }

  this.getHistory = function () {
    return _historyLog;
  }

}

function Employee({name, age, salary, primarySkill}){
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.primarySkill = primarySkill;
  var _historyLog = "";
  var _presentName = "";
  var _startWork;
  var _endWork;
  var _timer;

  this.setSalary = function(sum){
    if(sum > 0) {
      if(sum < this.salary) {
        _historyLog += "try to change salary from " + this.salary + " to " + sum + ".\n";
      } else {
        _historyLog += "change salary from " + this.salary + " to " + sum + ".\n";
        this.salary = sum;
      }
    }
  }

  this.getSalary = function () {
    console.log(this.name + "'s salary is: " + this.salary + "$");
  }



  this.getWorkTimeInSeconds = function() {
    let count = 0;
    if(_presentName){
      _timer = setInterval(function(){count++}, 1000)
    }
    return count;
  }


  this.hire = function(nameOfCompany) {
    _presentName = nameOfCompany;
    _startWork = new Date();
    _historyLog += this.name + " is hired to " + _presentName + " in " + _startWork.toString()+ "\n";
  }

  this.fire = function(nameOfCompany) {
    clearInterval(_timer);
    _endWork = new Date();
    _presentName = nameOfCompany;
    _historyLog += this.name + " is fired from " + _presentName + " in " + _endWork.toString() + ".\n";
    _presentName = "";
  }

  this.getHistory = function () {
    return _historyLog;
  }
}
