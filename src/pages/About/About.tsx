import "./About.scss";
import MyPhoto from "../../assets/Img/foto.png";
import {
  BsEnvelopeFill,
  BsGithub,
  BsLinkedin,
  BsDiamondFill,
} from "react-icons/bs";

const About = () => (
  <div className='About'>
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
        <a href='https://www.linkedin.com/in/gustavovieirazu/' target='_blank'>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        repellendus iusto corporis error sed fuga ipsam magni rem nisi animi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        accusantium ipsum quaerat praesentium sunt similique a, temporibus saepe
        quam aliquam?
      </p>
    </div>
  </div>
);

export default About;
