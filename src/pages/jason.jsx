import React, { Component ,  useEffect , useState } from 'react'
import axios from "axios";
import { border } from '@mui/system';

function Jason() { 
    const [posts, setposts] = useState([])
//   useEffect(() => {
//     
//     .then(function (response) {
//       // handle success
//       setposts(response.data)
//       console.log(response);
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
//   }, [])
useEffect(async() => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setposts(res.data);
}, [])
    return (
        <>
        <table border="1">
            <tr>
            <th> 
          user id 
             </th>
              <th> 
              id
              </th>
              <th> 
              tittle 
              </th>
              <th> 
               body
              </th>
            </tr>
              { posts.map((post)=> (  
              <tr key={post.id}>
                  <td> {post.userId}</td>
                  <td> {post.id}</td>
                  <td> {post.title}</td>
                  <td> {post.body}</td>
              </tr>) )}
             
                
           
          
        </table>
            
        </>
    )
}

export default Jason
