import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react'

export default function Intro() {

const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:  1500,
            backSpeed: 50,
            strings: ['Developer.', 'Front End Developer.' ] });
    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="../../assets/me.gif" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There! I'm</h2>
                    <h1>Latifa EL BARGUI.</h1>
                    <h3>I'm a <span ref={textRef}></span></h3>
                    <p>"I like to code stuff that solves problems in a creative way."</p>
                </div>
            </div>
        </div>
    )
}
