import albumBackroundImage from "../Assets/picture.png";
import './Album.css';

export function Album({ name, id }) {
    return (
        <div className="albumOuter1">
                <img src={albumBackroundImage} className="albumImg" />
                <h3 className="h3" ><i>{name}</i></h3>
        </div>
    )
}