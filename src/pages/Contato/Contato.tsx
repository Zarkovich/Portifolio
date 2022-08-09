import "./Contato.scss";
import {
    BsDiamondFill,
    BsWhatsapp,
    BsEnvelopeFill,
    BsGithub,
    BsLinkedin,
} from "react-icons/bs";

function Contato() {
    return (
        <div className='Contato' title='Contact' id='Contact'>
            <div className='Contato__Titulo'>
                <BsDiamondFill />
                <h1>Contato</h1>
            </div>
            <div className='Contato__Description'>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ut, impedit a quaerat dolor optio quasi veritatis veniam
                    nihil magni fuga, rerum ratione eligendi amet molestias
                    dolore. Sequi veritatis tenetur nisi?
                </p>
            </div>
            <div className='Contato__links'>
                <p>
                    <BsWhatsapp />
                    &nbsp; +55 (79) 99192-0258
                </p>
                <a href='mailto:gustavovieirazu@gmail.com'>
                    <BsEnvelopeFill />
                    &nbsp; gustavovieirazu@gmail.com
                </a>
                <a href='https://github.com/Zarkovich' target='_blank'>
                    <BsGithub />
                    &nbsp; Zarkovich
                </a>
                <a
                    href='https://www.linkedin.com/in/gustavovieirazu/'
                    target='_blank'
                >
                    <BsLinkedin />
                    &nbsp; gustavovieirazu
                </a>
            </div>
        </div>
    );
}

export default Contato;
