import "./Header.scss";
import illustrator from "../../assets/Img/imagemSobrefundo.svg";
import Curriculo from "../../assets/file/GustavoVieira.pdf";

const Header = () => (
    <div className='Header'>
        <div className='Header__Description'>
            <p>DESENVOLVEDOR FULL-STACK</p>
            <h1>Gustavo Vieira</h1>
            <p>
                Sou desenvolvedor FULL-STACK. Utilizo altuamente como tecnologia
                de desenvolvimento: React e TypeScript
            </p>
            <a href={Curriculo} target='_blank'>
                <button>BAIXAR CURRÍCULO</button>
            </a>
        </div>
        <div className='Header__Image'>
            <img src={illustrator} alt='imagem' />
        </div>
    </div>
);

export default Header;
