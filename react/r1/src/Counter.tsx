import { useState } from "react";
const sampleArray = [1,5,6,7,9];

const calcuatedValue =  useMemo(() => {
    let count = 0;
    sampleArray.map=((item) => {
        count = count + item;
    });
    return count;
},[sampleArray]);
console.log(calculatedValue)





const Counter = () =>{
    // const{buttonLable,color,testObject}=props;
    // const{studentName,department,marks}=testObject;
    // const{js,python,react}=marks;
    // const{js.total}=js;
    // const{python.total}=python;
    // const{react.total}=react;
    
    const [value,setValue] = useState(0)
    const [multi,setMulti] = useState(1)
    const countButtonClick = () => {
        setValue(value+1);
        setMulti(multi*2);
    };
    
    




    return(
        <>
    <h2>this button is clicked {value} times</h2>
    <h2>this button is Multiply by {multi} times</h2>
    <button onClick={()=> countButtonClick()}></button>
    


    
    </>

    );
    
};

export default Counter;