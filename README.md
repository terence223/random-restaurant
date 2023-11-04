## Homepage

[https://terence223.github.io/random-restaurant/](https://terence223.github.io/random-restaurant/)

## How to run

Please create a `.env` file first to enter your Google map apikey and Foursquare place apikey. Please check `.env-example` as reference.

### `yarn install`

install all necessary plugins

### `yarn dev`

run Vite React webpage.

### `yarn e2etest`

run e2e test by Cypress

## Problem and Solution

Actually I was hesitant at choosing which api, Google map place api or Foursquare place api. So I did a lot research on these two api. The biggest reason I gave up Google map place api is because it's lack of some information at response like menu. Even though Foursquare place api has its own problem, like its query params makes me feel useless.

## Technical Choices Reason

- React : The framework I'm most familiar with between React, Vue and Angular.

- Ant design : It's a really convenient to build small project quickly. Full of many kind of UI component for various purpose.

## Architecture

- assets : Store all static assets like logo

- pages : Every folder inside represent an actual router webpage and its special components. Seperating more components as possible as it can to make main file easy to read and track.

- types : Define interface and type for typescript.

- api : Put all api related code here.

- components : All components for common use, like Button.

- utils : All useful function here, like debounce.

## Todo missions

1. Make target location able to edit by user.

2. Provide more api choice rather than only Foursquare.

3. Make responsive better.

4. Defined UI and color system of whole website.

## Other project code

Recently I developed a simple todo project to practice full-stack development

Homepage : [https://terence223.github.io/todo-frontend/signup](https://github.com/terence223/todo-backend)

Frontend code : [https://github.com/terence223/todo-frontend](https://github.com/terence223/todo-backend)

Backend code : [https://github.com/terence223/todo-backend](https://github.com/terence223/todo-backend)

## Resume and Profile

Resume : [https://d.pr/f/uXZpqQ](https://www.linkedin.com/in/terence223/)

Linkedin : [https://www.linkedin.com/in/terence223/](https://www.linkedin.com/in/terence223/)
