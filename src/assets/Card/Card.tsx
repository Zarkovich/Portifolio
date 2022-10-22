import "./Card.scss";

type CardType = {
    image: string;
    title: string;
    description: string;
    link: string;
};

function Card({ image, title, description, link }: CardType) {
    return (
        <>
            <span className='Card__border'></span>
            <div className='Card'>
                <a href={link} target='_blank'>
                    <div className='Card__image'>
                        <img src={image} alt='' />
                    </div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </a>
            </div>
        </>
    );
}

export default Card;
