import "./Projetos.scss";
import { BsDiamondFill } from "react-icons/bs";
import ProjetosSlide from "./ProjetosSlide";

function Projetos() {
    return (
        <div className='Projetos'>
            <div className='Projetos__titulo'>
                <BsDiamondFill />
                <h1>Projetos</h1>
            </div>
            <ProjetosSlide />
        </div>
    );
}

export default Projetos;
