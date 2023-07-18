import './App.css';
import { Navbar } from './components/Navbar';
import { Album } from './components/Album';
import { AlbumInput } from './components/AlbumInput';
import { Albumlist } from './components/Albumlist';
import { ImageInput } from './components/imageInput';
import { Imagelist } from './components/Imageslist'
import { useState, useEffect } from 'react';
import { db } from './firbaseinit';
import { onSnapshot, collection, where, query } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

function App() {
  const [albums, setAlbums] = useState([]);
  const [buttonstate, setButtonstate] = useState(false);
  const [imagebuttonstate, setimageButtonstate] = useState(false);
  // got below albuminfo from albumlist component

  const [albumname, setalbumname] = useState('');
  const [albumId, setalbumId] = useState('');
  const [IsAlbum, setIsalbum] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const [emptyMesg, setEmptyMesg] = useState(false);


  const addalbumname = (name, id) => {
    setalbumname(name);
    setalbumId(id);
  }


  useEffect(() => {
    const getImageArray = async()=>{
      const q = query(collection(db, "photopholio"), where("name", "==", albumname));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          const finalArray = docData.imageArray
          setImageArray(finalArray);
      });
    }
    getImageArray();
  },[albumname,albumId]);


  useEffect(() => {
    const unsub = onSnapshot(collection(db, "photopholio"), (snapShot) => {
      const albumsarray = snapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      setAlbums(albumsarray);
    
    })
  }, [])

  const onAlbumClick = () => {
    setIsalbum(true)
  }

  const onclickimage = () => {
    setimageButtonstate(true)
  }

  const handleAlbumButton = () => {
    { buttonstate ? setButtonstate(false) : setButtonstate(true) }
  }

  const handleImageButton = () => {
    { imagebuttonstate ? setimageButtonstate(false) : setimageButtonstate(true) }
  }

  const backButtonClick = () => {
    setIsalbum(false);
  }

  return (
    <div className="App">
      <Navbar />


      {IsAlbum ? <>
        {imagebuttonstate ? undefined : <ImageInput albuminfo={albumId} backButtonClick={backButtonClick} />}
        <Imagelist images={imageArray} imagebuttonstate={imagebuttonstate} onclickimage={handleImageButton}  />
      </> : <>
        {buttonstate ? undefined : <AlbumInput />}
        <Albumlist albums={albums} buttonstate={buttonstate} addAlbumname={addalbumname} onAlbumClick={onAlbumClick} onclick={handleAlbumButton} />
      </>
      }
    </div>
  );
}

export default App;
