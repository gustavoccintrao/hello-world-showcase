// import { useState, useEffect, Fragment } from 'react';


export default function App() {
    const countrys = [
        {
            name: "brazil",
            title: "Brasil",
            img: 'img/brazil.png',
            text: 'console.log("Olá, mundo!")'
        },
        {
            name: "argentina",
            title: "Argentina",
            img: 'img/argentina.png',
            text: 'console.log("¡Hola, mundo!")'
        },
        {
            name: "usa",
            title: "Estados Unidos",
            img: 'img/usa.png',
            text: 'console.log("Hello, world!")'
        },
    ]

    // function handleShowCountrys() {
    //     console.log("Entrou na função")
    //     countrys.map(country => {
    //         return (
    //             <div className="country-container">
    //                 <img src={country.img} alt='' />
    //                 <span>{country.title}</span>
    //             </div>
    //         )
    //     })
    // }

    return (
        <div>
            <h3> Hello World Around The World </h3>
            {countrys.map(country => {
                return (
                    <div className="country-container">
                        <img src={country.img} alt='' />
                        <p>{country.title}</p>
                        <div className="hello-world-wrapper">
                            <div class="window">
                                <div class="titlebar">
                                    <div class="buttons">
                                        <div class="close">
                                        </div>
                                        <div class="minimize">
                                        </div>
                                        <div class="zoom">
                                        </div>
                                    </div>
                                </div>
                                <div class="content">
                                    <p>{country.text}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )



}