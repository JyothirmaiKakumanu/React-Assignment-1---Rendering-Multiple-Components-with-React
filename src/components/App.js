import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="root" data-ns-test="">
      
      <h1 data-ns-test="project-name">Hangman</h1>
    <br>
      <p data-ns-test="project-description">Takes input of random string and checks if character is present in the string. If hangman is completely hanged the game ends.</p>
    </div>
  )
}


export default App;
