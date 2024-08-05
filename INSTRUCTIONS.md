# Graphql API

<div style="display: inline_block">
    <img align="center" alt="NodeJS" title="NodeJS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg">
    <img align="center" alt="Typescript" title="Typescript" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg">
    <img align="center" alt="MySQL" title="MySQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg">
    <img align="center" alt="Sequelize" title="Sequelize" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg">
</div>
<br>

## Table of Contents

- [Introduction](#introduction)
- [Setup Instructions](#setup-instructions)
- [How did I decide which technologies to use](#how-did-i-decide-which-technologies-to-use)
- [Are there any improvements I could make to my submission](#are-there-any-improvements-i-could-make-to-my-submission)
- [What would I do differently if I was allocated more time](#what-would-i-do-differently-if-i-was-allocated-more-time)

## Introduction

This is a Graphql API for the [Back-End challenge - Graphql API](https://github.com/dantas-dev/back-challenge-graphql) made with [NodeJS](https://NODEJS.org/), [Typescript](https://www.typescriptlang.org/) and [MySQL](https://www.mysql.com/).

## Setup instructions

1. Install [NodeJS](https://nodejs.org/pt), [NPM](https://www.npmjs) (or [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)) and [MySQL](https://www.mysql.com/).

2. Clone this [repository](https://github.com/danvinicius/back-challenge-graphql).
    ```bash
    git clone git@github.com:danvinicius/back-challenge-graphql.git
    ```
3. Configure MySQL and create a database named, e.g: *back_challenge_graphql*.
4. Go to root folder and install dependencies with [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) or [NPM](https://www.npmjs.com/).
    ```bash
    yarn install
    ```
    or

    ```bash
    npm run install
    ```

5. Create a *.env* file with your database infomartion, e.g:

    ```bash
    DB_NAME=back_challenge_graphql
    DB_USER=foo
    DB_PASS=bar
    DB_HOST=127.0.0.1
    ```
6. Run migrations to create tables in database.
    ```bash
    npx sequelize-cli db:migrate
    ```

7. Start the API in development mode.
    ```bash
    yarn dev
    ```

    or

    ```bash
    npm run dev
    ```
5. The API will be accessible at http://localhost:4000

## How did I decide which technologies to use

I've used NodeJS with Typescript due to challenge requirements and due to my experience with this languages. I decided to use MySQL because my experience too. And sequelize because of its simplicity, it is one of the best ORMs for relational databases.

## Are there any improvements I could make to my submission

I would add some validation based on business rules on input data, in addition to Graphl type validation.

## What would I do differently if I was allocated more time

I would try some automated tests or maybe a TDD.
