import { Image } from './image';
import './Imageslist.css';
import {useState} from 'react';

export function Imagelist({ images, imagebuttonstate, onclickimage }) {
    
    const [imageArray, setImagearray] = useState(images);
    
 

    return (
        <div className='imageslist'>
            <div className='imageslistInner1'>
                <h2>Your Albums</h2>
                <button
                    className={imagebuttonstate ? "addImage" : "cancel"} onClick={onclickimage}>
                    {imagebuttonstate ? "AddImage" : "cancel"}
                </button>
            </div>
            <div >
                {
                    imageArray && imageArray.length === 0 ?
                        <div>
                            <h1>
                                No images found
                            </h1>
                        </div> :

                        <ul className='imageslistInner2'>
                            {images.map((item) => {
                                return (
                                    <div className='imagediv'>
                                        <Image imagename={item.name} imageurl={item.url} />
                                    </div>
                                )
                            })}
                        </ul>
                }
            </div>
        </div>
    )
}