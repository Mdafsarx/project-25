import { useEffect } from "react";
import Blog from "../blog/Blog";
import { useState } from "react";

const Blogs = () => {

const [data,setData]=useState([])

useEffect(()=>{
     fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])

console.log(data)



    return (

        <div className="md:w-[70%] space-y-20">
            {
                data.map((Data,inx)=><Blog key={inx} data={Data}/>)
            }
        </div>

    );
};

export default Blogs;