

- [x] Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
  
  R.: click on table > Filter Rows

- [X] Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .

R.: right click > create table 

- [X] Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:

    FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente
    Descricao - não permite nulos, tipo texto (varchar(100))
    AnoLancamento - não permite nulos, tipo int
    Nota - permite nulos, tipo int

    ![imageinfo](./dia-1-banco-de-dados-sql/ex3.png)

- [x] Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

R.: fk_city_country refers to 'sakila'.country

- [x] Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?

R.: N:1 toda cidade tem que ter somente 1 país associado

- [X] Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?

R.: 1:N , um país pode ter várias cidades, porém uma cidade só pode ter um país associado.

- [x] Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1. 
  
R.: 

Adress N:1 City
Film 1:N Actor 
Film 1:N text 
Adress N:1 staff
