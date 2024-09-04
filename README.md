# Caminho do Trem

## Alunos: Gustavo Henrique Dias, Ryan Gabriel Mazzei Bromati


Este projeto implementa um sistema de controle de trem autônomo, que se move ao longo de um trilho numérico infinito. O trem recebe uma lista de comandos de movimento (`ESQUERDA` ou `DIREITA`) e executa esses comandos respeitando certas restrições para garantir a segurança e a eficiência da operação.

## Funcionalidades

- **Movimento do Trem**: O trem pode se mover para a esquerda (`ESQUERDA`) ou para a direita (`DIREITA`).
- **Limite de Movimentos**: O trem pode realizar no máximo 50 movimentos por viagem.
- **Restrição de Movimentos Consecutivos**: O trem não pode realizar mais de 20 movimentos consecutivos na mesma direção.
- **Retorno da Posição Final**: Após a execução dos comandos, o sistema retorna a posição final do trem.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/guusdias/automatic-trainroad
   cd automatic-trainroad
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

### Executar o Programa

Para rodar o programa e ver o resultado de uma lista de comandos, execute:

```bash
node index.js
```
### Testes

O projeto inclui um conjunto de testes unitários para garantir o correto funcionamento do sistema. Para rodar os testes, utilize o comando:

```bash
npm test
```

Os testes cobrem os seguintes cenários:

- Movimentação correta do trem.
- Respeito ao limite de movimentos consecutivos.
- Validação da lista de comandos.
- Respeito ao limite total de movimentos.

## Exemplo de Execução

Dado o seguinte conjunto de comandos:

```javascript
const commands = ["ESQUERDA", "DIREITA", "DIREITA", "DIREITA", "DIREITA", "ESQUERDA"];
```

A posição final do trem será `2`, após a execução dos comandos.
