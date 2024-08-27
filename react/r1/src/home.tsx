import { useEffect } from "react";

const home=() =>{

   const getData= async ()=> {
      const response = await fetch("mongodb://localhost:27017/")
      const data = await response.json()
      console.log(data)


   }


   useEffect(()=>{
      getData();
   },[]);

return(
   <>
   <h1>{title}</h1>
   </>
)
};
export default home;
