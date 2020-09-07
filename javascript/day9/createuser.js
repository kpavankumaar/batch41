function CreateUserData(firstName, lastName, criteria1 ){
    firstName = typeof firstName === 'string' ? firstName : 'invalid argument';
    if(firstName !== 'invalid argument'){
     this.firstName = firstName;
     this.lastName = lastName;
     var criteriaBasedSelection = CareerUser.bind(this, "7.5 gpa ",criteria1);
     criteriaBasedSelection('kabbadi');
     //CareerUser.apply(this, ["mca", "football"]);
     FinanceUser.call(this, "100000");

    }
     
 }