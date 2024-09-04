import { movingTrain } from "./src/train.js";
import commands from "./utils/commands.js";

function firstBlood(commands) {
  try {
    const train = movingTrain();
    const finalPosition = train.move(commands);
    console.log(`Posição final do trem: ${finalPosition}`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  }
}

firstBlood(commands);
