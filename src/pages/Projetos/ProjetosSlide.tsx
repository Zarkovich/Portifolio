import styled from "styled-components";
import "./ProjetosSlide.scss";
import Card from "../../assets/Card/Card";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../../Components/Loading/index";

interface DataProps {
    title: string;
    description: string;
    image: string;
}

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
    const [ProjetosData, setProjetosData] = useState([]);

    useEffect(() => {
        axios.get("https://api-notion-database.herokuapp.com/").then((item) => {
            setProjetosData(item.data);
            console.log(ProjetosData);
        });
    }, []);

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
            {ProjetosData ? (
                <>
                    <Span onClick={leftClick}>{"<"}</Span>
                    <div className='Slide_card__container' ref={carroselRef}>
                        {ProjetosData.map((item: DataProps, index: number) => (
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
                </>
            ) : (
                <Loading />
            )}
        </section>
    );
}

export default ProjetosSlide;
