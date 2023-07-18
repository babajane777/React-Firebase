import './AlbumInput.css';
import { useRef, useState } from 'react';
import { db } from '../firbaseinit';
import { doc, addDoc, collection, setDoc, getDoc, updateDoc, arrayUnion, where } from "firebase/firestore";

export function ImageInput({ albuminfo, backButtonClick }) {

  const [Imageinfo, setImageinfo] = useState({ imagename: "", imageurl: "" });
  const [Albuminfo, setAlbuminfo] = useState(albuminfo);


  async function handlesubmit(e) {
    e.preventDefault();
    const addfields = async () => {
      const albumRef = doc(db, "photopholio", Albuminfo);

      // console.log(albumRef.data());
      await updateDoc(albumRef, {
        imageArray: arrayUnion({ name: Imageinfo.imagename, url: Imageinfo.imageurl }),
      });

    }
    addfields();
    setImageinfo({imagename:"",imageurl:""})
  }

  return (
    <>
      <button className='backbutton' onClick={backButtonClick}>
        Back
      </button>
      <div className="imageinput">

        <h2 className='imageh2'>
          Add image to <span>{albuminfo}</span>.
        </h2>
        <form className="innerimageinput" onSubmit={handlesubmit}>
          <div className='inputsdiv'>
            <input placeholder="image Name"
              value={Imageinfo.imagename}
              onChange={(e) => setImageinfo({ imagename: e.target.value, imageurl: Imageinfo.imageurl })}
              required >

            </input>
            <input placeholder="image url"
              value={Imageinfo.imageurl}
              onChange={(e) => setImageinfo({ imagename: Imageinfo.imagename, imageurl: e.target.value })}
              required >

            </input>
          </div>
          <div className='buttons'>
            <button id="clear" onClick={(() => { setImageinfo({ imagename: "", imageurl: "" }) })} >clear</button>
            <button id="create"  >create</button>
          </div>
        </form>

      </div>
    </>
  )
}