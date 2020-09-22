import { Observable } from "rxjs";
import { ajax } from 'rxjs/ajax';
// var observer = {
//     next: (val) => {console.log("next", val)},
//     error: (val) => {console.log(val)},
//     complete: () => console.log('completed')
// }
// function get(url){
//     return Observable.create(function(item) {
//         const xhr = new XMLHttpRequest();
//         xhr.open('get', url);
//         xhr.onload = () => {
//             if(xhr.status === 200){
//                 item.next(xhr.response);
//                 item.complete();
//             }else{
//                 item.error(xhr.status);        
//             }
//         }
//         xhr.send();
//     })
// }

// let ajaxObservable = get('https://jsonplaceholder.typicode.com/commen');

// ajaxObservable.subscribe(
//     value => { console.log(value)},
//     value => { console.log(value)},
//     () => { console.log('completed')}
// )

ajax({url : 'https://jsonplaceholder.typicode.com/comments'}).subscribe(
    data => console.log(data.response),
    err => console.error(err)
)


