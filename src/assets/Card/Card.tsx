import "./Card.scss";
import ImgReference from "../Img/foto.png";

function Card() {
    return (
        <div className='Card'>
            <img src={ImgReference} alt='Foto' />
            <h1>Title</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                dolorem officia ab deleniti optio a.
            </p>
        </div>
    );
}

export default Card;
