//import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react';
import { uploadFile } from './services/api';
//import { uploadImage } from '../../server/controller/image-controller';
function App() {
  
  const [file,setFile]=useState('');
  const [result,setResult]=useState('')

  const fileInputRef = useRef();

  useEffect(()=>{

    const getImage= async()=>{
      if(file){
        const data=new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response=await uploadFile(data);
        setResult(response.path)
      }
    }

    getImage();

  },[file])
  const onUploadClick=()=>{
    fileInputRef.current.click();
  }


  return (
  <div className="container">
    <img src="https://media.istockphoto.com/id/526279366/vector/line-folder-icons.jpg?s=612x612&w=0&k=20&c=-G6horX0Ep-7LqtBHn8sB-cKRiFGHvNYGna5XaO1-f0=" alt=''/>

  <div className="wrapper">
    <h1> Simple File Sharing</h1>
    <p>Upload and share the download link</p>
    <button onClick={()=>onUploadClick()}>Upload</button>
    <input type="file"
    ref={fileInputRef}
    style={{display:'none'}}
    onChange={(e)=>setFile(e.target.files[0])}
    />
    <a href={result} target="__blank">{result}</a>
  </div>
  </div>
  );
}

export default App;
