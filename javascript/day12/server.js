function apiCall(resolve, reject, method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    // xhr.onload = function(){};
    xhr.addEventListener('readystatechange', function(item){
        if(xhr.readyState == 4){
            if(xhr.status >= 200 && xhr.status < 300){
                
                resolve(JSON.parse(item.target.responseText));
            }else{
                reject(item);
            }
        }
    })
    xhr.send();
}

var name ;
function test( param1 ) {
    // asyncronous  -> result
    param1('result');
}
function test1(){
    // bind to dom 
    test(function(val){
        console.log(val)
    })
}

