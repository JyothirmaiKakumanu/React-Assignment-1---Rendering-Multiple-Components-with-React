import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <label class="projectName">Project Name</label>
      <p data-ns-test="project-name">Bomberman2</p>
    <br>
      <label class="projectDescription">Project Description</label>
      <p data-ns-test="project-description">It looks interesting to code a game which we played in the childhood.</p>
    </div>
  )
}


export default App;
