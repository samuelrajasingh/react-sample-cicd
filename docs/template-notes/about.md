# About


## Features

- A simple React scaffold, including setup and run instructions. This project is based on the files generated by the React CLI's [create-react-app](#create-a-fresh-project) command.
- Use as a reference for new or existing applications.
- Add a copy to your repos with _Use this template_ button.


## How to use this project

Click the button below. That will fork it to your own repos.

- [![Use this template](https://img.shields.io/badge/Generate-Use_this_template-2ea44f?style=for-the-badge)](https://github.com/Samuelrajasingh/react-sample-cicd/generate)

Then follow the [Installation](/docs/installation.md) and [Usage](/docs/usage.md) docs to install and run the app so you can view it locally in your browser.

Follow the [Deploy](/docs/deploy.md) doc to deploy to GitHub Pages.


## Origin

This project was created using:

```sh
$ npx create-react-app my-app
$ cd my-app
```

Tip - you can add TS support by adding `--template typescript`.

The original app in this project is mostly unchanged. I've added components to demonstrate how they are used. I've added detailed docs and a GH Actions deploy flow to get the site hosted on GH Pages.


## How a React project works

- A React app typically runs as a _Node.js_ server, especially locally. This uses a compile step and runs from memory - there is no `build` directory used.
- The app can be compiled to a _build_ directory for running as a static site - this means you can deploy to GitHub Pages or Netlify.
- React uses `.js` or `.jsx` files with _JSX_ syntax (HTML inside JavaScript). These cannot be run directly. But these are transpiled (or compiled) to plain JavaScript by the `react-script build` command. Babel is used for that transpiling, but it is not necessary to use specify it directory as it is covered through the direct dependencies.

