import "./About.scss";
import MyPhoto from "../../assets/Img/foto.png";
import {
    BsEnvelopeFill,
    BsGithub,
    BsLinkedin,
    BsDiamondFill,
} from "react-icons/bs";

const About = () => (
    <div className='About' title='About'>
        <div className='About__left'>
            <div className='About__left__MyImage'>
                <img src={MyPhoto} alt='Minha Foto' />
            </div>
            <h1>Gustavo Vieira</h1>
            <div className='About__left__LinksIcons'>
                <a href='mailto:gustavovieirazu@gmail.com' target='_blank'>
                    <BsEnvelopeFill />
                </a>
                <a href='https://github.com/Zarkovich' target='_blank'>
                    <BsGithub />
                </a>
                <a
                    href='https://www.linkedin.com/in/gustavovieirazu/'
                    target='_blank'
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
        <div className='About__Rigth'>
            <div className='diamond'>
                <BsDiamondFill />
                <h1>SOBRE</h1>
            </div>
            <h2>Conheça um pouco sobre mim</h2>
            <p>Sou desenvolvedor FULL-STACK em constante aprendizagem.</p>
            <p>
                Iniciando na carreira como desenvolvedo, e procurando sempre o
                desenvolvimento profissional e pessoal.
            </p>
        </div>
    </div>
);

export default About;
