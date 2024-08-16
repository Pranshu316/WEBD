const a=1;
const b=3;
let constant =0;
// addition = (value1=10,value2) => {
//     return value1+value2;
// };
// const value1 = addition(10,false);
// const value2 = addition(3,true);

// console.log(value1)
// console.log(value2)
//function=() =>{}
//function=() =>{}
// const sampleText=false;
// const info={
//     name:"Pranshu",
//     department:"cs",
//     academicYear:"3rd",
// };
// const printInfo=(input,sampleText)=>{
//     message = `this is ${input.name} studying ${input.department} in ${input.academicYear}`;
//     if(sampleText){
//         message='sampletext';
//     }
//     return message;
// };

// information=printInfo(info,true);
// console.log(information);
// subtract = (a,b)=>{
//     return a-b;
// };
// multiply = (a,b)=>{
//     return a*b;
// };
// const doSomthing = (value,callback)=>{
//     var data = callback(value['a'],value['b']);
//     return data;
// };
// const variḁbLle = doSomthing({a:1,b:2},subtract)
// console.log(variḁbLle)

// const dosometing = (value =[])=>{
//     constant++;
//     console.log(`~total time the function is called:${constant}`);
    
//     if(constant==5){
//         return console.log(`~maximum limit exceed:${constant}`);
    
//     }
//     if(value.length === 0){
//         return dosometing([1]);
//     }
//     if(value.length != 2){
//         return dosometing([1]);
//     }
//     return {
//         'actualvalue':value,
//         'length':value.length,
//     }
// };
// const variable = dosometing([1,3,4,2]);
// console.log(variable);

const getData = async()=>{
    let data = await fetch(" https://jsonplaceholder.typicode.com/users");
    let dataSet = await response.json();
    console.log(dataSet);

};
// const variable = getData();
// console.log(variable);
// Could be GET or POST/PUT/PATCH/DELETE
// fetch('//dummyjson.com/test')
// .then(res => res.json())
// .then(console.log);

/* { status: 'ok', method: 'GET' } */
/* providing token in bearer */
// fetch('https://dummyjson.com/auth/RESOURCE', {
//     method: 'GET', /* or POST/PUT/PATCH/DELETE */
//     headers: {
//         'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
//         'Content-Type': 'application/json'
//     }, 
// })
// .then(res => res.json())
// .then(console.log);
// Define the API endpoint
//const apiUrl = ' https://covid19api.com/';

// Fetch data from the API
// fetch(apiUrl)
//     .then(response => {
//         // Check if the response is successful (status code 200-299)
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         // Parse the JSON from the response
//         return response.json();
//     })
//     .then(data => {
//         // Handle the data received from the API
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors that occurred during the fetch
//         console.error('There was a problem with the fetch operation:', error);
//     });
