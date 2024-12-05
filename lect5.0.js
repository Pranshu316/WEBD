var name="Name"
const collegeName="GLA"
const dob="4-5-2003"
const currentyear=2024
const students=[{
    name:"Name1",
    dob,
    collegeName,
    currentyear,
    order:1,

},
{
    name:"Name2",
    dob,
    collegeName,
    currentyear,
    order:2,

},

];
// const output= students[0]
// console.log("~ output:", output)
// students[0].order=students[0].order*4
// students[1].order=students[1].order*4
// console.log("~ students:", students)

// students.map((item)=>{
//     const updatedvalue = item.order*6;
//     item.order = updatedvalue;
//     return item;
// });
// console.log("~ students:", students)
//[].map(item,index=>{
//     return value;

// });
// [].map(value,index=>{
//     return value;
// })
students.map((value,index)=>{
    const up=value.order*4;
    students[index].order=up
    // value.order=up;
    // return value;


});
// console.log("~ students:", students)
number = [5,10,15,20,25]
// number.map((value,index)=>{
//     // const min=value-5;
//     // value=min;
//     // return value
//     number[index]=number[index]-5
// });
// number.forEach((value,index)=>{
//     // const min=value-5;
//     // value=min;
//     // return value
//     number[index]=number[index]-5
// });
// console.log("~ number:", number)
// if(1!=1){
//     console.log("~console:","IF wo")
// }
// else if(1==1){
    
//     console.log("~console:","ELSE IF wo")
// }
// else{
//     console.log("~console:","ELSE wo")
// }
const variable1=false
