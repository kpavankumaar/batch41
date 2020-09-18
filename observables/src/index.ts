import { Observable } from "Rxjs";
// // why do we need observable 

// // Observer Pattern 
// class Producer {
//     listeners:[];
//     constructor(){
//         this.listeners = [];
//     }
//     add(listener){
//         this.listeners.push(listener)
//     }
//     remove(listener){
//         const index = this.listeners.indexOf(listener)
//         this.listeners.splice(index,1)
//     }
//     notify(message:any){
//         this.listeners.forEach((listener) => {
//             listener.update(message);
//         })
//     }

// }

// const listener1 = {
//     update: message => {
//         console.log("listener 1 received:" , message);

//     }
// };
// const listener2 = {
//     update: message => {
//         console.log("listener 2 received:" , message);

//     }
// };

// const notifier = new Producer();
// notifier.add(listener1);
// notifier.remove(listener1);

// iterator pattern 

class MultipleIterator {
    cursor: number;
    array: Number[];
    divisor: number;
    constructor(arr:Number[], divisor = 1){
        this.cursor = 0 ;
        this.array = arr;
        this.divisor = divisor;
    }

    next(){
        while(this.cursor < this.array.length){
            const value = this.array[this.cursor++];
            if(value % this.divisor === 0 ){
                return value;
            }
        }
    }
    hasNext(){
        let cur = this.cursor;
        while(cur < this.array.length)  {
            if (this.array[cur++] % this.divisor === 0) {
                return true;
            } 
                
            
        }return false;
    }
}
const consumer = new MultipleIterator([1,2,3,4,5,6,7,8,9,10],3)
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());
console.log(consumer.next(), consumer.hasNext());

const observable = Observable.create( observer => {
    observer.next("Ravi");
    setTimeout(()=>{
        observer.next("Pavan");
    } , 2000)

    observer.next("srk")
    //observer.complete();// we are done 
} )
observable.subscribe(
    (item) => {console.log("next",item)} ,
    (error) => {console.log(error);},
    () => {console.log("completed");}
 )  

