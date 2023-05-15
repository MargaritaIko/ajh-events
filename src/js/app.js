import "../css/style.css";
import GoblinGame from "./GoblinGame";

window.addEventListener("load", () => {
  const goblinGame = new GoblinGame();
  goblinGame.boardGeneration(6);
  goblinGame.shootsRecorder();
  goblinGame.imgCreate(1000);
});
