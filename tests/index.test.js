import { movingTrain } from "../src/train";

describe("Sistema de Controle de Trem Autônomo", () => {
  test("Deve mover o trem para a posição final correta com comandos válidos", () => {
    const trem = movingTrain();
    const finalPosition = trem.move(["DIREITA", "DIREITA"]);
    expect(finalPosition).toBe(2);
  });

  test("Deve mover o trem para a esquerda corretamente", () => {
    const trem = movingTrain();
    const finalPosition = trem.move(["ESQUERDA"]);
    expect(finalPosition).toBe(-1);
  });

  test("Deve lidar com comandos mistos", () => {
    const train = movingTrain();
    const finalPostion = train.move([
      "ESQUERDA",
      "DIREITA",
      "DIREITA",
      "DIREITA",
      "DIREITA",
      "ESQUERDA",
    ]);
    expect(finalPostion).toBe(2);
  });

  test("Deve lançar erro para comando desconhecido", () => {
    const train = movingTrain();
    expect(() => train.move(["DIREITA", "PULAR"])).toThrow(
      "Comando inválido: PULAR"
    );
  });

  test("Deve lançar erro para lista de comandos vazia", () => {
    const train = movingTrain();
    expect(() => train.move([])).toThrow("Lista de comandos inválida ou vazia");
  });

  test("Deve parar após 50 movimentos", () => {
    const train = movingTrain();
    const commmands = [
      ...Array(10).fill("DIREITA"),
      ...Array(10).fill("ESQUERDA"),
      ...Array(10).fill("DIREITA"),
      ...Array(10).fill("ESQUERDA"),
      ...Array(10).fill("DIREITA"),
    ];

    const finalPosi = train.move(commmands);
    expect(finalPosi).toBe(10);
  });

  test("Deve lançar erro se mais de 20 movimentos consecutivos na mesma direção", () => {
    const train = movingTrain();
    const command = Array(21).fill("DIREITA");
    expect(() => train.move(command)).toThrow(
      "Movimentos consecutivos na mesma direção ultrapassaram o limite de 20"
    );
  });
});
