Tarefa 8 - Compiladores

### Nome: Flamarion Fagundes Pinto

Desenvolva um programa que recebe como entrada um programa fonte, e apresenta em tela uma tabela de símbolos com os tokens identificados. Para cada código processado, crie um arquivo onde deverão ser exibidas as seguintes informações para cada token:

    • Classe
    • Valor
    • Posição

Exemplo de código fonte em PHP:

```php
1.  <?php
2.  function calcularSoma($valor1, $valor2) {
3.
4.
5.  $valor3 = $valor1 + $valor2;
6.
7.  return $valor3;
8.
9.  }
10.
11. $resultado = calcularSoma(1, 2);
12. for ($x = 0; x <= $resultado; $x++) {
13.
14. if ($x > 1) {
15.     print($resultado);
16. }
17. }
```
