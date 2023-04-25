import './style.css';
import { useState } from 'react';
import axios from 'axios';

export const FileUploader =({})=>{
    const [files,setFiles]=useState([]);
    const onInputChange= (e)=>{
        console.log(e.target.files)
        setFiles(e.target.files)
    }
    const onSubmit = (e)=>{
        e.preventDefault()
       const data = new FormData(); 

       for(let i = 0 ; i< files.length ; i++){
        data.append('file',files[i])
       }

      
       axios.post('http://localhost:8005/upload',data)
       .then((e)=>{
        console.log('Success')
       })
       .catch((e)=>{
        console.log('Error',e)
       })
    }
  return (
    <form method="post" onSubmit={onSubmit}>
        <div className="form-group files">
            <label>Upload Your File</label>
            <input type="file"
            onChange={onInputChange}
            className="form-control"
            multiple></input>
        </div>
        <button>Submit</button>
    </form>
  )   
};