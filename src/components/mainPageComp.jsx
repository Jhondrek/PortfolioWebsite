import HTMLImg from '../assets/html-5-logo-svg-1.svg';
import CSSImg from '../assets/css-3.svg';
import JsImg from '../assets/javascript-1.svg';
import TsImg from '../assets/typescript-2.svg';
import ReactImg from '../assets/react.svg';
import ReactNativeImg from '../assets/react-native-1.svg';
import Firebase from '../assets/firebase-3.svg';
import GitHub from '../assets/git.svg';
import {generateProjectsJsx} from "../utils/renderUtils.jsx"


import "./mainPageStyles.css"
import "./genericStyles.css"
import { NavLink } from 'react-router-dom';



export default function MainPage(){

    

    console.log(generateProjectsJsx())

    return(
        <main className='hero'>
            <h1 className='hero__tittle'>David <span className='callToActionColor'>Jhondrek</span></h1>
            <p className='hero__description'>React Jr Front End Developer</p>
            <p className='hero__description hero__description--hidden'>Open to work</p>


        <section className='techonologiesSection'>
            <h2 className='hero__description hero__description--hidden'>Core technologies: </h2>
            <p className='hero__description smallFont hero__description--hidden'>But I'm always learning more...</p>

            <div className='techonologiesCont'>
                <img className='technologyImg' src={HTMLImg} alt="HTML logo"/>
                <img className='technologyImg' src={CSSImg} alt="css logo"/>
                <img className='technologyImg' src={JsImg} alt="js logo"/>
                <img className='technologyImg' src={ReactImg} alt="react logo"/>
                <img className='technologyImg' src={Firebase} alt="firebase logo"/>
                <img className='technologyImg' src={GitHub} alt="gitgub logo"/>
                <img className='technologyImg' src={TsImg} alt="ts logo"/>
                <img className='technologyImg' src={ReactNativeImg} alt="react native logo"/>
            </div>
        </section>

            <NavLink to="/help" className='hero__btn'>Get in touch with me</NavLink>

            <section className='topProjects'>

                <div className='topProjects__title'>
                    <h2>My Work</h2>
                    <span className='topProjects__title__line'> </span>
                </div>
                
                {generateProjectsJsx(3)}

                <NavLink to="/examples" className='projectsNavLink'>→ See all projects ←</NavLink>

            </section>

            
        </main>
    )
}


