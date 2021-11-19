import React, { Component, useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

function Home() {
    const [firstname,setfirstname]=useState("qasim");
    const [lastname,setlastname]=useState("khan");
    const [persondata,setpersondata]=useState({
        "fname":"",
        "lname":"",
    });

    const changedata= (e)=> {
        const {name,value}= e.target;
        setpersondata((prevState)=> ({
            ...prevState,
            [name]:value,
        }))
        console.log(persondata)
    }

   const submitdata= ()=> {
       const person ={
           "fname":firstname,
           "lname":lastname,
       };
   console.log(persondata)
   }
    return (
        //<Container style={{backgroundColor:"red" }} maxWidth="sm"> for css
        <div style={{}}>
            <Container className="cont" style={{backgroundColor:"" }} maxWidth="lg">
            <p>home page</p> <br />
            <TextField
          required
         //onChange={(e) =>setfirstname(e.target.value)}
         onChange={(e) =>changedata(e)}
          name="fname"
          id="outlined-required"
          label="qasim"
          Value={persondata.firstname}
        />
        <br />
        <p>
           {firstname}
        </p>
        
        <TextField
          required
          onChange={(e) =>changedata(e)}
          name="lname"
          id="outlined-required"
          label="last name"
          Value={persondata.lastname}
        /> <br />
        <p>
            {lastname}
        </p>
        <br/>
            <Button onClick={submitdata} variant="contained">submit data</Button>
            </Container>
        </div>
    )
}

export default Home
