// enums 
enum UserResponse {
    No = 0,
    Yes = 1
}

function response(username:string, agreement: UserResponse){
///api call 
    
}
UserResponse['0'] // this will work 
response('Ravi', UserResponse.Yes );
function getData1(){
    return 20;
}

enum GetValue{
    // 
    test = getData1(),
    test1
}

// string enums 
enum Header {
    'json'= 'application/json',
    'xml'= 'appication/xml'
}

Header['application/json'] // this will not work 


fetch('url',{
    headers:{'content-type': Header['json']}
})

// heterogeneous enums
enum Het {
    No = 0,
    Yes = "yes"
}
enum Test{
    sample
}

Test.sample
enum Decide{
    // constant number
    test = 1 + 1,
    test1,
    // computed member 
    test2 = "str".length,
    test3
}
Decide.test1
Decide.test2
// generics
