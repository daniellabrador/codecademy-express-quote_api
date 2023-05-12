# **Quote API**

Quote API is a RESTful API built with Node.js and Express that serves up interesting quotes about computers, coding and technology. This app is a [Codecademy](https://www.codecademy.com/learn/learn-express) project intended to enhance my knowledge on Express.js.

## Table of Contents

- [Project Prompt](#project-prompt)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)

## Project Prompt

In this project, you’ll be building a small Express.js web API to store and serve different quotes about computers, coding, and technology. We have provided data.js so you can focus on building the API.

## Technologies

- Express

## Setup

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run node server.js to start the server.
4. Visit `localhost:4001` in Postman to interact with the API.

## Endpoints

### `GET /api/quotes/random`

Returns a random quote from the data set.

Response body:

```
{
  "quote": {
    /* quote object */
  }
}
```

### `GET /api/quotes`

If no query parameters are provided, returns all quotes from the data set.

If a `person` query parameter is provided, returns only quotes by the specified person.

Response body:

```
{
  "quotes": [ /* Array of requested quotes */ ]
}
```

### `POST /api/quotes`

Adds a new quote to the data set.

Query parameters:

- `quote`: the text of the quote
- `person`: the person who is credited with saying the quote

If either parameter is missing, the server will respond with a `400 Bad Request` status code.

Response body:

```
{
  "quote": {
    /* new quote object */
  }
}
```

## Sources

The techniques utilized was based on the lessons taught in [Codecademy's Learn Express Course](https://www.codecademy.com/learn/learn-express). The challenge is also provided by Codecademy.

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
