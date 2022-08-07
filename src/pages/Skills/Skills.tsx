import "./Skills.scss";
import { BsDiamondFill } from "react-icons/bs";
import CSS3 from "../../assets/Icons/IconesLenguage/css3.png";
import javascript from "../../assets/Icons/IconesLenguage/javascript.png";
import react from "../../assets/Icons/IconesLenguage/react.png";
import postgreesql from "../../assets/Icons/IconesLenguage/postgreesql.png";
import typescript from "../../assets/Icons/IconesLenguage/typescript.png";
import RangeSkill from "../../Components/RangeSkills/RangeSkill";

function Skills() {
    return (
        <div className='Skill'>
            <div className='Skills__Titulo'>
                <BsDiamondFill />
                <h1>Skills</h1>
            </div>
            <div className='Skills__Container'>
                <div className='Skill__Images__Progress'>
                    <h3>CSS3</h3>
                    <img src={CSS3} alt='CSS3' />
                    <RangeSkill color='#75cbf7' width='70%' />
                </div>
                <div className='Skill__Images__Progress'>
                    <h3>JavaScript</h3>
                    <img src={javascript} alt='JavaScript' />
                    <RangeSkill color='#FFD92E' width='90%' />
                </div>
                <div className='Skill__Images__Progress'>
                    <h3>ReactJS</h3>
                    <img src={react} alt='React' />
                    <RangeSkill color='#9F57CE' width='60%' />
                </div>
                <div className='Skill__Images__Progress'>
                    <h3>Postgresql</h3>
                    <img src={postgreesql} alt='Postgresql' />
                    <RangeSkill color='#0192ec' width='80%' />
                </div>
                <div className='Skill__Images__Progress'>
                    <h3>TypeScript</h3>
                    <img src={typescript} alt='TypeScript' />
                    <RangeSkill color='#1C72CF' width='70%' />
                </div>
            </div>
        </div>
    );
}

export default Skills;
