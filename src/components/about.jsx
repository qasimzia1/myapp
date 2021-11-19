import React, { Component, useState } from "react";
import Child from "./child";


function About() {
  // <Child citiess={name}/>
  //usestate initial value dyta hy
  const [count, setcount] = useState(0);
  const [name, setname] = useState("qasim");
  const [cities, setcities] = useState(["rwp", "isb", "khi"]);
  const [medicine, setmedicine] = useState({
    medications: [
      {
        aceInhibitors: [
          {
            name: "lisinopril",
            strength: "10 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
          {
            name: "lisinopril",
            strength: "10 mg Tab",
            dose: "1 tab",
            route: "Sho",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        antianginal: [
          {
            name: "nitroglycerin",
            strength: "0.4 mg Sublingual Tab",
            dose: "1 tab",
            route: "SL",
            sig: "q15min PRN",
            pillCount: "#30",
            refills: "Refill 1",
          },
        ],
        anticoagulants: [
          {
            name: "warfarin sodium",
            strength: "3 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
          {
            name: "DUMMY DATA",
            strength: "3 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        betaBlocker: [
          {
            name: "metoprolol tartrate",
            strength: "25 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        diuretic: [
          {
            name: "furosemide",
            strength: "40 mg Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
        mineral: [
          {
            name: "potassium chloride ER",
            strength: "10 mEq Tab",
            dose: "1 tab",
            route: "PO",
            sig: "daily",
            pillCount: "#90",
            refills: "Refill 3",
          },
        ],
      },
    ],
    labs: [
      {
        name: "Arterial Blood Gas",
        time: "Today",
        location: "Main Hospital Lab",
      },
      {
        name: "BMP",
        time: "Today",
        location: "Primary Care Clinic",
      },
      {
        name: "BNP",
        time: "9 Weeks",
        location: "Primary Care Clinic",
      },
      {
        name: "BUN",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
      {
        name: "Cardiac Enzymes",
        time: "Today",
        location: "Primary Care Clinic",
      },
      {
        name: "CBC",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
      {
        name: "Creatinine",
        time: "1 Year",
        location: "Main Hospital Lab",
      },
      {
        name: "Electrolyte Panel",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
      {
        name: "Glucose",
        time: "1 Year",
        location: "Main Hospital Lab",
      },
      {
        name: "PT/INR",
        time: "999 Weeks",
        location: "Primary Care Clinic",
      },
      {
        name: "PTT",
        time: "3 Weeks",
        location: "Coumadin Clinic",
      },
      {
        name: "TSH",
        time: "1 Year",
        location: "Primary Care Clinic",
      },
    ],
    imaging: [
      {
        name: "Chest X-Ray",
        time: "Today",
        location: "Main Hospital Radiology",
      },
      {
        name: "Chest X-Ray",
        time: "Today",
        location: "Main Hospital Radiology",
      },
      {
        name: "Chest X-Ray",
        time: "Today",
        location: "Main Hospital Radiology",
      },
    ],
  });

  //arrow function
  const decCount = () => {
    setcount(count + 2);
    console.log("button click");
  };
  const secCount = () => {
   
    console.log("button click");
    
    console.log("sec click");
  };
  const incCount = () => {
    //function k ander agar html use karain gy to osy concatonate karain gy using +  ye function ma loop use karny ka tarika hy
    const cityitem = cities.map((cities) => "<li>" + cities + "</li>");
    setcount(count + 1);
    //function k ander jab bhi hum array sy koi specific cheez nikalty han  os ka syntax const jobsList = jobs.filter((job)=> job.id==3);
    // console.log(jobsList);
    const jobs = [
      { id: 1, isActive: true },
      { id: 2, isActive: false },
      { id: 3, isActive: true },
    ];
    //const jobsList = jobs.filter((job)=> job.isActive);
    const jobsList = jobs.filter((job) => job.id == 3);
    console.log(jobsList);

    console.log("button clicked");
  };

  return (
    <div>
    
         <Child Count1={secCount} myname={name} city={cities} medicines={medicine.medications[0].aceInhibitors[0].strength}/>
      {medicine.medications[0].aceInhibitors.map((aceInhibitors) => (
        <ul>
          <li> {aceInhibitors.name} </li> <li> {aceInhibitors.strength} </li>
          <li> {aceInhibitors.dose} </li>
          
            {aceInhibitors.route=="Sho"? "shoaib" : aceInhibitors.route}
      
          <li> {aceInhibitors.sig} </li> <li> {aceInhibitors.pillCount} </li>
          <li> {aceInhibitors.refills} </li>
        </ul>
      ))}
      <h1> {name}</h1>
      <h1> bcs181030</h1>
      <button onClick={incCount}>submit</button>
      <button onClick={decCount}>submit</button>
   
      //html ma loop lagany k liye map use hta hy
      <p> {cities[1]}</p>
      {cities.map((cities) =>  (
        <li> {cities} </li>
      ))}
      <p> count is : {count}</p>
      //jason ko is tarah nikalty han medicine array name hy ya variable name
      then os k objects
      <p>{medicine.medications[0].antianginal[0].route}</p>
      //conditional rendering array ma sy agar kisi condition base p cahiye ho
      condition ? (true):(false)
      {cities[1] == "isb" ? (
        <p> city is islamabad</p>
      ) : (
        <p> city is {cities[1]}</p>
      )}
     
    </div>
  );
}

export default About;
