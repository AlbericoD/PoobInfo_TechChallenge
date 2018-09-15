# PoobInfo TechChallenge

> A playground for test challenge.

# Development

- Cloning the repo

```bash
$ git clone https://github.com/AlbericoD/PoobInfo_TechChallenge.git
```

- Environment variables

Create a `.env` file in the api directory.

```yml
NODE_ENV=development
POOB_DATABASE=mongodb://localhost:27017/playground
PORT=8080
```

- Installing Api dependencies

```bash
$ cd api && npm install
```

- Installing FrontEnd dependencies

```bash
$ cd frontend && npm install
```

Running `npm start` in the root directory.
Open your browser `http://localhost:{PORT}/public/#/`

- Running scripts

| Action                   | Usage       |
| ------------------------ | ----------- |
| Starting Api             | `npm start` |
| Starting FrontEnd        | `npm start` |
| Root/ Api && Front Build | `npm start` |

# User Endpoint

Endpoint for managing users.

| Method | Endpoint      | Description                   |
| ------ | ------------- | ----------------------------- |
| GET    | /company      | Retrieves a list of company   |
| GET    | /company/:id  | Retrieves a specific company  |
| POST   | /company      | Creates a new company         |
| PUT    | /company/:id  | Updates company               |
| DELETE | /company/:id  | Deletes company               |
| GET    | /customer     | Retrieves a list of customer  |
| GET    | /customer/:id | Retrieves a specific customer |
| POST   | /customer     | Creates a new customer        |
| PUT    | /customer/:id | Updates customer              |
| DELETE | /customer/:id | Deletes customer              |

# Author

[Albérico Dias Barreto Filho](https://www.linkedin.com/in/albericod/)
