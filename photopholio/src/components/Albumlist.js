import { Album } from './Album';
import './Albumlist.css';
import { useEffect, useState } from 'react';
// import { AlbumInput } from './AlbumInput';

export function Albumlist({ albums, buttonstate, onclick, addAlbumname, onAlbumClick }) {
    const [albumname, setalbumname] = useState({ name:"", id:""});

    useEffect(() => {
        addAlbumname(albumname);
        // console.log(albumname)
    }, [albumname, addAlbumname]);

    const handlealbumclick = (name, id) =>{
        addAlbumname(name, id);
        onAlbumClick()
    }
    return (
        <div className='albumList'>
            <div className='albumlistInner1'>
                <h2>Your Albums</h2>
                <button
                    className={buttonstate ? "addAlbum" : "cancel"} onClick={onclick}>
                    {buttonstate ? "AddAlbum" : "cancel"}
                </button>
            </div>
            <div >
                <ul className='albumlistInner2'>
                    {albums.map((item) => {
                        return (
                                <div onClick={() => handlealbumclick(item.name, item.id)}>
                                    <Album name={item.name} id={item.id} />
                                </div> 
                        )
                    })}
                </ul>
            </div>
        </div>
    )


}