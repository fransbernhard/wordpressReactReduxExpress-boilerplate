# wrdpress rest API
A boilerplate to use the Wordpress REST API and buils SPA with ReactJS, ExpressJS, Redux and React Router.

- [ReactJS](https://reactjs.org/) - The state based framework for your Views
- [React Router v4](https://reacttraining.com/react-router/web/guides/philosophy) - For routing to different paths
- [Redux](https://redux.js.org/introduction) - Redux manages your state
- [Babel](https://babeljs.io/) - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack](https://webpack.js.org/) - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js so you can include it in a HTML page
- [ExpressJS](https://expressjs.com/) - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html
- [Wordpress REST API](https://developer.wordpress.org/rest-api/) - The WordPress REST API that provides API endpoints for WordPress data types that allow developers to interact with sites remotely by sending and receiving JSON (JavaScript Object Notation) objects.
- [GIT REST API](https://developer.github.com/v3/) - Get JSON data from GIT
- [Instagram API](https://www.instagram.com/developer/) - Get JSON data from Instagram

## Installation
*Project requires Node.js v6+ to run.*

Clone the project to you're local repository. Install the dependencies + devDependencies and start backend server:
```
$ cd yourLocalRepositoryRoot

$ yarn install
$ yarn dev

or

$ npm install
$ npm run dev
```

Navigate to http://localhost:8080/ in browser to view project in development environment.

## Build project
Compile development files @ **src** into production files @ **dist**:
```
$ yarn build

or

$ npm run build
```

Special thanks to:

[tahnik](https://github.com/tahnik/react-expressjs/)
