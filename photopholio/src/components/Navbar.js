import './Navbar.css';
import albumicon from '../Assets/icon2.png';

export function Navbar() {

    return (
        <div className="navbar">
            <div className='navinnerdiv'>
                <img src={albumicon} alt="album" className='navimg' />
                <h3>Photopholio</h3>
            </div>
        </div>
    )
}