import ChangingImage from "../ChangingImage/ChangingImage";
import "./Header.css";
const Header = () => {
    return(
    <div className="Header">
        <div>
            <div className="imageContainer">
                <ChangingImage isDutch={true} startIndex={1}/>
                <ChangingImage isDutch={true} startIndex={2}/>
                <ChangingImage isDutch={true} startIndex={3}/>
            </div>
            <h1>RATER</h1>
            <div className="imageContainer">
                <ChangingImage isDutch={false} startIndex={1}/>
                <ChangingImage isDutch={false} startIndex={2}/>
                <ChangingImage isDutch={false} startIndex={3}/>
            </div>
        </div>

    </div>
    );
}

export default Header;