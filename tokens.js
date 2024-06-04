const tokens = [
  {
    label: "caracteres especiais",
    matches: /<\?php/,
  },
  {
    label: "definição de função",
    matches: /^function\s+(\w+)/,
  },
  {
    label: "invocação de função",
    matches: /\w+\s*\([^)]*\);/,
    ignore: ["print"],
  },
  {
    label: "palavras reservadas",
    matches: /\b(for|if|else|return|print)\b/,
  },
  {
    label: "identificadores",
    matches: /\$\w+/,
  },
  {
    label: "atribuição",
    matches: /=/,
  },
  {
    label: "operadores matemáticos",
    matches: /[+\-*\/%]/,
  },
  {
    label: "operadores de comparação",
    matches: /^(?!.*php).*([<>]=?|==|!=).*$/,
  },
  {
    label: "delimitadores",
    matches: /[\{};,\[\]]/,
  },
];

module.exports = tokens;
