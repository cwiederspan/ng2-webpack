# ng2-webpack
About the simplest file and project structure imaginable for an 
[Angular2](https://angular.io) project that uses [Webpack](https://webpack.github.io/) 
instead of SystemJs.

Up to this point, the only *improvement* that has been made is to include the 
[less-loader](https://github.com/webpack/less-loader) for Webpack and updated 
the style files to use LESS instead of straight CSS.

The bulk of this project is driven by these two pages from the Angular2 site:
* <https://angular.io/docs/ts/latest/quickstart.html>
* <https://angular.io/docs/ts/latest/guide/webpack.html>

## Setup
```bash
# Clone this repo
git clone https://github.com/cwiederspan/ng2-webpack

# Change directory into the new project
cd ng2-webpack

# Download and setup the dependencies
npm install

# Build and run
npm start
```