
import { Observable, interval, range, from, of, zip, fromEvent } from "rxjs";
import { map , flatMap, first} from "rxjs/operators";
import { ajax } from "rxjs/ajax";


// sequence operators 
const arrSource = from([1,2,3,4,5]);
// arrSource.subscribe(val => console.log(val));


// const a$ = interval(200).map( i =>  )

const src = [1,2,3,4,5];
const upper = src.map(item => item * 2);

// upper.forEach(value => console.log(value));

// observable 
const src$ = range(1,5);
const newSrc$ = src$.pipe(
    map(item => item * 2),
    map(item => item * 4)
);
//newSrc$.subscribe( value => console.log(value))

//const newSrc1$ = src$.pipe(map(item => item * 2));

//src$.subscribe( value => console.log(value * 2 ));

// operators // canceling sequences , handling errors   
//src$.subscribe(value => console.log(value * 3 ));

// flat map 
// of(1,2,3).subscribe( v => console.log(v));
// const value$ = from([
//     of(1,2,3),
//     of(4,5,6),
//     of(7,8,9)
// ]);

// const value1$ = value$.pipe(flatMap(v => v));
// value1$.subscribe( v => {
//     //console.log(v);
// })



// sequence cancelation
// const counter$ = interval(1000);
// const sub1 = counter$.subscribe( i => {
//     console.log('subscription 1', i)
// })

// const sub2 = counter$.subscribe( i => {
//     console.log('subscription 2', i)
// })

// setTimeout(() => {
//     console.log('canceling subscription 2');
//     sub2.unsubscribe();
// }, 2000)

// ajax({url : 'https://jsonplaceholder.typicode.com/comments'}).subscribe(
//     data => console.log(data.response),
//     err => console.error(err)
// )

// const ajaxCalls$ = from([ajax({url : 'https://jsonplaceholder.typicode.com/comments'}), ajax({url : 'https://jsonplaceholder.typicode.com/comments'}),ajax({url : 'https://jsonplaceholder.typicode.com/comments'})])
// ajaxCalls$.pipe( (val) => {console.log(val)});

const data1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(10);
    },1000)
})
const data2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(20);
    },5000)
})

let asyncObservable$ = zip(data1 , data2);
asyncObservable$.subscribe(([data1Info, data2Info]) => {
    console.log(data1Info, data2Info);
});
const source$ = fromEvent(document, 'click');
const sample = source$.pipe(map(e => `${e.timeStamp}`));
sample.subscribe(val => console.log(val));