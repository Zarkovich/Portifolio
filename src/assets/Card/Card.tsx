import "./Card.scss";

type CardType = {
    image: string;
    title: string;
    description: string;
};

function Card({ image, title, description }: CardType) {
    return (
        <>
            <span className='Card__border'></span>
            <div className='Card'>
                <div className='Card__image'>
                    <img src={image} alt='' />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    );
}

export default Card;
