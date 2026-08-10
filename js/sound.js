const correctSound = new Audio("./js/sounds/chrisiex1-correct-156911.mp3");
const incorrectSound = new Audio("./js/sounds/freesound_community-wrong-47985.mp3");
const timeUpSound = new Audio("./js/sounds/kave_msri-timer-ticks-314055.mp3");

export default class Sound {
  constructor() {
    this.correctSound = correctSound;
    this.incorrectSound = incorrectSound;
    this.timeUpSound = timeUpSound;
  }

  playCorrectSound() {
    this.correctSound.currentTime = 0;
    this.correctSound.play();
  }

  playIncorrectSound() {
    this.incorrectSound.currentTime = 0;
    this.incorrectSound.play();
  }

  playTimeUpSound() {
    this.timeUpSound.currentTime = 0;
    this.timeUpSound.play();
  }
    stopTimeUpSound() {
    this.timeUpSound.pause();
    this.timeUpSound.currentTime = 0;
  }
}