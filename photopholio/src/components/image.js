import './image.css';
export function Image({ imagename, imageurl }) {
    return (
        <div className="imageOuter1">
                <img src={imageurl} alt="Image not found" className="Img" />
                <h3 className="h3" ><i>{imagename}</i></h3>
        </div>
    )
}