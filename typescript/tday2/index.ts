// function data() {
//     console.log('data');
// }

let num = 1 ;
const name_1 = 'srikanth';

let run = (val) => { return val};
// basictype 
// interfaces 
// function 

let engine : string ;
engine = '' ;
let num1: number = 6;
`hello there ${ name_1 } is from india`;
// array types 
let list: number[];
list = [1,2,3];
list.push(10);

//tuple
let cars:[string, number] ;
cars = ['hyundai', 'maruti', ''];

let cars1: [string, number];
cars1 = ["ten", 20]
enum profile {
    admin = 1,
    manager,
    sme,
    visitor
}

console.log(profile.sme);

let data: unknown = 4;
data = '';
data.fun();
let num2 : any = 6;
num2.ifItExists();
num2.fun().data.use;

function getData(): void {
    console.log('value');
}
let dataType: void  = undefined ;
dataType = null;

let data3: undefined = null;
let datanull : null = undefined; 

function error():never {
    //while(true){}
    throw new Error();

}