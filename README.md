# Payroll API - Calculadora de Folha de Pagamento

API para cálculo de folha de pagamento brasileira com regras reais de INSS, IRRF e FGTS.
Permite cadastrar faixas progressivas, calcular salários líquidos e visualizar tudo via Swagger.

## Tecnologias

- NestJS

- MongoDB + Mongoose

- Swagger

## Estrutura de Pastas

`/payroll` – Resultado final com INSS, IRRF, FGTS e salário líquido

`payroll/inss` – Cálculo progressivo com regras via banco

`payroll/irrf` – Cálculo baseado no salário líquido pós-INSS

`payroll/fgts` – Cálculo direto (8%)

## Endpoints principais

`POST /inss/calculate`

`POST /irrf/calculate`

`POST /payroll/calculate`

`POST /inss/rules`

`POST /irrf/rules`

## Testar com Swagger

[Documentação da API](https://payroll-api-slwg.onrender.com/api)

## Como rodar localmente

```
git clone https://github.com/maysaraujo/payroll-api
cd payroll-api
yarn install
yarn start:dev
```

Crie um arquivo .env com:

```
MONGO_URL=mongodb://localhost:27017/payroll-dev
PORT=3000
```
