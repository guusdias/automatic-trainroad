export function movingTrain() {
  let position = 0;
  let moves = 0;
  let lastPlace = null;
  let counting = 0;

  function move(commands) {
    if (!Array.isArray(commands) || commands.length === 0)
      throw new Error("Lista de comandos inválida ou vazia");

    for (let command of commands) {
      if (command !== "ESQUERDA" && command !== "DIREITA")
        throw new Error(`Comando inválido: ${command}`);

      if (moves >= 50) return;

      if (command === lastPlace) {
        counting++;
        if (counting > 20)
          throw new Error(
            "Movimentos consecutivos na mesma direção ultrapassaram o limite de 20"
          );
      } else {
        lastPlace = command;
        counting = 1;
      }

      if (command === "ESQUERDA") position--;
      if (command === "DIREITA") position++;

      moves++;
    }

    return position;
  }

  return { move };
}
