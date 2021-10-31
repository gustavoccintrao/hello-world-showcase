// import { useState, useEffect, Fragment } from 'react';

export default function App() {
  const countrys = [
    {
      name: "brazil",
      title: "Brasil",
      img: "img/brazil.png",
      text: (
        <span>
          <span>console</span>
          <span className="log">{".log"}</span>
          <span className="hello-world">('Olá, Mundo!')</span>
        </span>
      ),
    },
    {
      name: "argentina",
      title: "Argentina",
      img: "img/argentina.png",
      text: (
        <span>
          <span>console</span>
          <span className="log">{".log"}</span>
          <span className="hello-world">('Hola, Mundo!')</span>
        </span>
      ),
    },
    {
      name: "usa",
      title: "Estados Unidos",
      img: "img/usa.png",
      text: (
        <span>
          <span>console</span>
          <span className="log">{".log"}</span>
          <span className="hello-world">('Hello, World!')</span>
        </span>
      ),
    },
  ];

  return (
    <div>
      <h3> Hello World Around The World </h3>
      {countrys.map((country) => {
        return (
          <div>
            <div className="country-container">
              <img src={country.img} alt="" />
              <p>{country.title}</p>
            </div>
            <div className="hello-world-wrapper">
              <div class="window">
                <div class="titlebar">
                  <div class="buttons">
                    <div class="close"></div>
                    <div class="minimize"></div>
                    <div class="zoom"></div>
                  </div>
                </div>
                <div class="content">
                  <p>{country.text}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
