import { ProjetosData } from "./ProjetosData";
import Card from "../../assets/Card/Card";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./ProjetosSlide.scss";

const Span = styled.span`
    position: absolute;

    background-color: #00000063;
    color: #ffffff4c;

    font-weight: bold;
    font-size: 1.5rem;

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
`;

function ProjetosSlide() {
    const [current, setCurrent] = useState<number>(0);
    const [windowSize, setWindowSize] = useState<boolean>(false);
    const length = ProjetosData.length;

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!ProjetosData || !ProjetosData.length) {
        return <h1>Perdi os Projetos!</h1>;
    }

    useEffect(() => {
        if (window.innerWidth >= 1200) setWindowSize(true);
    }, [window.innerWidth]);

    console.log(windowSize);
    return (
        <section className='Slide'>
            <Span onClick={prevSlide}>{"<"}</Span>
            {ProjetosData.map((data, index) => {
                return (
                    <>
                        {!windowSize && (
                            <div
                                className={
                                    index === current ? "slide active" : "slide"
                                }
                                key={index}
                            >
                                {index === current && (
                                    <Card
                                        image={data.image}
                                        title={data.title}
                                        description={data.description}
                                    />
                                )}
                            </div>
                        )}
                    </>
                );
            })}
            <Span onClick={nextSlide}>{">"}</Span>
        </section>
    );
}

export default ProjetosSlide;
