
// class 
 // base/ superclass
 // derivedclass/ subclass
// modifiers - > public, private, protected, readonly , static, abstract
// accessor -> get, set 
// Enums
// generics 

// class 
class Engine{
    private engineType: string;
    protected engineMake: string;
    readonly makingStandard: string = "sample";
    constructor(data:string){
        this.engineType = data;
    }
    runing(){
        console.log("running smoothely");
        // this.makingStandard = ""
    }
    
    get value() : string {
        return this.engineType;
    }
    
    set value(v : string) {
        this.engineType = v;
    }
    
}

let suv = new Engine("1500cc");
suv.makingStandard = "data";
suv.value = "data"; // setting the private property value
suv.value; // getting the private property value

class Machine extends Engine{
    constructor(data:string){
        super(data);
    }
    transmissionSystem(){
        console.log(this.engineMake);
    }
}
class Machine1 extends Engine{
    runing(){
        console.log("machine1")
    }
}

let suv1 = new Machine("1200cc");


class Sum{
    static num = {num1: 0 , num2: 1}
    calculate(){
       return Sum.num.num1 + Sum.num.num2;
    }
}

let sumVal = new Sum();
sumVal.num
Sum.num.num1 = 10;
Sum.num.num2 = 20;

// abstarct classes
abstract class Department{
    constructor(public data: string){

    }
    abstract test;
}
class ProductionDept extends Department{
    test:string;
    dept(){
        console.log(this.data);
    }
    meeting(){

    }
    constructor(data:string){
        super(data);
    }
}

let GovtManufacturing = new ProductionDept('content');
console.log(GovtManufacturing.dept)
let newDept = new Department('content1')