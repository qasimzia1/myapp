import React, { Component,useState } from 'react'
import Form from './form'


function Formp() {
    const [click , setclick]= useState(false)
       
        return (
            <div>

                <button type="submit"  onClick= {()=> setclick(!click)} />
                {click==true? <Form/> : "no component"}
          
            </div>
        )
    
    
}

export default Formp
