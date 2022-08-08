import "./Card.scss";

type CarType = {
    image: string;
    title: string;
    description: string;
};

function Card({ image, title, description }: CarType) {
    return (
        <div className='Card'>
            <div
                className='Card__image'
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default Card;
