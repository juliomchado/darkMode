import React from 'react'

import './module.style.css'

import { FaRegLightbulb } from "react-icons/fa";



export default function Home() {

    function Toggle(){
        const light = document.querySelector('.light')
        const body = document.querySelector('.container')
        const button = document.querySelector('.button')
        const thread = document.querySelector('.thread')
        light.classList.toggle('active')
        body.classList.toggle('body-light')
        button.classList.toggle('button-light')
        thread.classList.toggle('thread-light')
    }


    return (
        <React.Fragment>
            <div className="container">
                <div className="thread"></div>
                <FaRegLightbulb className="light"></FaRegLightbulb>
            <button className="button" onClick={Toggle}></button>
            </div>
        </React.Fragment >
    )
}