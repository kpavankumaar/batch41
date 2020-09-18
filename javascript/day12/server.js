function apiCall(resolve, reject, method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
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
