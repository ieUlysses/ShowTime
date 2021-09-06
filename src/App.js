import React, { useState, useContext } from "react";

import "./App.css"


import { Context } from "./Context/Context";



import Header from './Componants/Header/Header';
import CV from './Pages/CV/CV';
import Projects from './Pages/Projects/Projects';
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home"


export default function () {

  const [context, setContext] = useState("");

  return (


    <>
      <Context.Provider value={[context, setContext]}>

        <Header />

        <div className="holder">

          <section className={`home ${context}`} id="home">
            <Home />
          </section>

          <section className={`about ${context}`} id="about">
            <About />
          </section>

          <section className={`Cv ${context}`} id="cv">
            <CV />
          </section>

          <section className={`Projects ${context}`} id="projects">
            <Projects />
          </section>

        </div>

      </Context.Provider>
    </>

  );
}

