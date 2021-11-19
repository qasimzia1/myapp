import React, { Component, useState,useEffect } from 'react'
import Contactchild from '../components/contactchild'


function Contact() {
    const [aboutContent,setaboutContent] = useState("about us");
    const [Count,setCount] = useState(0);

    useEffect(() => {
        setaboutContent("dynamic data");
        console.log("use effect called again ");
    }, [aboutContent])
 const abc = () => {
      console.log("abc called");
      setaboutContent("changed");
     
 }
 const inCount = () => {
    setCount(Count+1);
    console.log({Count});

}
 

    return (
        <div>
            <Contactchild/>

           <p> {aboutContent} </p>
           
           <p> {Count} </p>
            <button onClick={abc} > change the data </button>
           
            <button onClick={() => inCount(3)}  > inc </button>
        </div>
    )
}

export default Contact
