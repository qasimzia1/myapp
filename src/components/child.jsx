import React, { Component ,useState} from 'react'


function Child({myname,city,medicines,Count1}) {
  Count1();
    return (
        <div>
            name is : {myname}
            cities are : {city}
            medicine strength is : {medicines}
            <button onClick={Count1}>secCount</button>
        </div>
    )
}

export default Child
