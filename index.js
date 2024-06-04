const fs = require("fs");
const tokens = require("./tokens");

const CODE_FILE_NAME = "code";
const SYMBOLS_FILE_NAME = `${CODE_FILE_NAME}-symbols`;

function extractCodeLines() {
  const code = fs.readFileSync(`${CODE_FILE_NAME}.txt`, "utf8");
  const lines = code.split("\n");

  return lines;
}

function extractSymbols() {
  const symbols = [];

  lines.forEach((line, index) => {
    tokens.forEach((token) => {
      let match;
      let regex = new RegExp(token.matches, "g");

      while ((match = regex.exec(line)) !== null) {
        const word = match.length > 1 ? match[1] : match[0]; // Usei esse ternário aqui para tratar o caso de ter mais de um match, como por exemplo no function, pegar como lexema apenas o nome da função.

        // Usei essa lógica pro caso da invocação da função, onde eu ignoro o print nesse cenário, por exemplo.
        if (word.includes(token?.ignore?.join(" "))) {
          return;
        }

        symbols.push({
          line: index + 1,
          class: token.label,
          word: word.trim(),
        });
      }
    });
  });

  return symbols;
}

function createSymbolsFile(symbols) {
  const uniqueSymbols = new Set(); // Usei um set para tratar duplicidades

  symbols.forEach((symbol) => {
    uniqueSymbols.add(
      `Posição linha ${symbol.line}: classe ${symbol.class}, lexema ${symbol.word}`
    );
  });

  fs.writeFileSync(
    `${SYMBOLS_FILE_NAME}.txt`,
    Array.from(uniqueSymbols).join("\n")
  );
}

function printSymbolsFile() {
  const symbols = fs.readFileSync(`${SYMBOLS_FILE_NAME}.txt`, "utf8");
  console.log(symbols);
}

const lines = extractCodeLines();
const symbols = extractSymbols(lines);
createSymbolsFile(symbols);
printSymbolsFile();
