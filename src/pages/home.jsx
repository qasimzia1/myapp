import React, { Component, useState } from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';

function Home() {
    const [firstname,setfirstname]=useState("qasim")
    const [lastname,setlastname]=useState("khan")
    return (
        //<Container style={{backgroundColor:"red" }} maxWidth="sm"> for css
        <div style={{}}>
            <Container className="cont" style={{backgroundColor:"" }} maxWidth="lg">
            <p>home page</p> <br />
            <TextField
          required
          onChange={(e) =>setfirstname(e.target.value)}
          id="outlined-required"
          label="qasim"
          defaultValue={firstname}
        />
        <br />
        <p>
           {firstname}
        </p>
        
        <TextField
          required
          onChange={(e) =>setlastname(e.target.value)}
          id="outlined-required"
          label="last name"
          defaultValue={lastname}
        /> <br />
        <p>
            {lastname}
        </p>
        <br/>
            <Button variant="contained">Contained</Button>
            </Container>
        </div>
    )
}

export default Home
