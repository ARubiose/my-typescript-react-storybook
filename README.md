# Typescript React storybook.
**Maintain your UI library!**

This project contains a combination of:
* [Storybook](https://storybook.js.org) - the UI environment for developing React components
* [Typescript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript
<!-- * [Rollup](https://rollupjs.org) - module bundler that bundles all your components -->

### What does it do?
* It lets you develop your React components in isolation
* It serves as documentation of your components for designers and other developers
* It bundles all your components developed with Storybook into one single portable dependency that you can inject into your app.

### Usage
<!-- node v16.17.0 -->
#### Storybook
1. Run `npm install`
2. Run `npm run start | npm run storybook` in order to run Storybook, visit localhost:6006

You can also build a static version of Storybook (that could be deployed to some shared location) by running `npm run build-storybook`

#### typescript + rimraf + copyfiles - building package
* [rimraf](https://www.npmjs.com/package/rimraf) - 
* [copyfiles](https://www.npmjs.com/package/copyfiles) - 
```
npm run build
```
<!-- #### Rollup - building package
* `npm run build:dev` - builds a package in development mode (i.e. no minifying and uglyfying)
* `npm run build:dev-w` - same as above, but is watching changes and rebuilds immediately after one is found
* `npm run build:prod` - builds a production package, which can be found in `/build` folder of your app -->
<!-- 
### Storybook and Rollup configuration
Storybook is awesome tool. And Rollup is an awesome bundler. But combined together they are twice as awesome!

Storybook itself is easily configurable and can be adjusted to your needs with a bunch of plugins and configuration files.
The instance of Storybook housed in this project is additionally preconfigured with the most useful addons. This includes:
* Better UX (elements positioning, library version displaying, better elements hierarchy handling)
* `info` plugin - every component gets automatically created documentation page with props info etc. You can also include your own README
* `knobs` plugin - lets you easily configure the component before injecting it into your application -->

### Semantic versioning
```
npm i semantic-release 
```
[Semantic-release](https://www.npmjs.com/package/@semantic-release/npm)