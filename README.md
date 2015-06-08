# Express Modular Bootstrap

Example of a modular structure for NodeJS projects with Express.

## Why Modular?

Here's why you should be doing modular code:

- Organization
- Scalability
- Maintenance
- Readability
- Works great with Agile (Each module a feature? Less code dependency?)
- Better Testing (Each module could have it's own environment and tests)

I can do this all day...

## Things I already implemented (I would love feedback)

- Package dependencies for each module
- Route management for each module
- Shared module for reusable code (DRY)
- Created separated files for each purpose (App, Config, Routes) instead of being everything inside one file.
- Using nodemon to reload environment
- Gulp Tasks
  - Compiling, concatenating and compressing SASS with SourceMaps
  - Optimizing Images
  - JSHinting the JS files

## Things that are missing

- Test Suite
- Better module's folder structure (HIGH PRIORITY)
- Refactoring or Engineering Suggestions

## Running the project

`npm install` and `npm start` to start the server.
`gulp` to tell gulp to watch for file changes

## CONTRIBUTE!

I think this is a really cool project to work on.

Everyday the web becomes more modular and organized. We have projects like React and Angular2 that are using this modular approach with web components to create a less dependent and organized application. Why not use the same approach on back-end?

Make your contribution and I'll be glad to add your name to the project. If we get recognized, your name will be there and who knows? Sky is the limit!
