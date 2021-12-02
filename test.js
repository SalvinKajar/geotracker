const ipfetch = require('ip-fetch');

let info;
let arr=[]
let fun = async () =>{
    info = await ipfetch.getLocationNpm('103.142.198.167'); 
    console.log(info);
    arr.push(info);
}
fun();

console.log(arr)
