import styled from "styled-components";
import "./ProjetosSlide.scss";
import { ProjetosData } from "./ProjetosData";
import Card from "../../assets/Card/Card";
import { useRef } from "react";

const Span = styled.span`
    position: absolute;

    background-color: #00000096;
    color: #ffffff4c;

    font-weight: bold;
    font-size: 2.5rem;

    transition: all 0.2s linear;

    user-select: none;

    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }

    &:first-child {
        left: 10px;
    }
    &:last-child {
        right: 10px;
    }

    @media (min-width: 1200px) {
        position: relative;
    }
`;

function ProjetosSlide() {
    const carroselRef = useRef<HTMLDivElement | null>(null);

    function leftClick(e: React.MouseEvent) {
        e.preventDefault();
        console.log(carroselRef.current?.offsetWidth);
        if (carroselRef.current) {
            carroselRef.current.scrollLeft -= carroselRef.current.offsetWidth;
        }
    }

    function rightClick(e: React.MouseEvent) {
        e.preventDefault();
        if (carroselRef.current) {
            carroselRef.current.scrollLeft += carroselRef.current.offsetWidth;
        }
    }

    return (
        <section className='Slide'>
            <Span onClick={leftClick}>{"<"}</Span>
            <div className='Slide_card__container' ref={carroselRef}>
                {ProjetosData.map((item, index) => (
                    <div className='Slide__card' key={index}>
                        <Card
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
            <Span onClick={rightClick}>{">"}</Span>
        </section>
    );
}

export default ProjetosSlide;
