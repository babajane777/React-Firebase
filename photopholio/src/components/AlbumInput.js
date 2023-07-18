import './AlbumInput.css';
import { useRef, useState } from 'react';
import {db} from '../firbaseinit';
import { doc, addDoc, collection } from "firebase/firestore"; 

export function AlbumInput() {

  const [albumName, setalbumName] = useState({ name: "" });
  

  async function handlesubmit(e){
    e.preventDefault();
    const docRef = await addDoc(collection(db, "photopholio"), {
      name: albumName.name,
      });
    
  }

  return (

    <div className="albuminput">
      <h2>
        Create a new album
      </h2>
      <form className="innerAlbuminput" onSubmit={handlesubmit}>
        <input placeholder="Album Name"
          value={albumName.name}
          onChange={(e)=>setalbumName({name:e.target.value})}
          required >

        </input>
        <button id="clear" onClick={(()=>{setalbumName({name:""})})} >clear</button>
        <button id="create"  >create</button>
      </form>

    </div>
  )
}