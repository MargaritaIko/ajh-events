import "./css/style.css";

import GoblinGame from "./js/app";

window.addEventListener('load', () => {
    const goblinGame = new GoblinGame();
    goblinGame.boardGeneration(4);
    goblinGame.shootsRecorder();
    goblinGame.imgCreate(1000);
  });