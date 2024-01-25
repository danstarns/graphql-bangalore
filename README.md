# Getting Started

Code for talk at GraphQL Bangalore Meetup on 30th January 2024.

- https://www.meetup.com/graphql-bangalore/events/298181263/
- https://www.graphql-debugger.com/

## Installation

```bash
npm install
```

## Running GraphQL Debugger

```bash
npm run debugger
// Debugger Online, visit http://localhost:16686 to get started.
```

## Running the app

```bash
npm run start
// Server is running on http://localhost:4000/graphql
```

## Test

To see how GraphQL Debugger works issue a GraphQL query to the server:

http://localhost:4000/graphql

```gql
{
  hello
}
```

and then go to GraphQL Debugger UI at http://localhost:16686 and see the trace.
