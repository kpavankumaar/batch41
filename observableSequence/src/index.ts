
import { Observable, interval, range } from "rxjs";
import { map} from "rxjs/operators";



// sequence operators 
// const a$ = interval(200).map( i =>  )

const src = [1,2,3,4,5];
const upper = src.map(item => item * 2);

upper.forEach(value => console.log(value));

// observable 
const src$ = range(1,5);
src$.map( item => item * 2);

src$.subscribe( value => console.log(value));
// operators // canceling sequences , handling errors   
