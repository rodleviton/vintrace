# Wine Search App 🍷

## Introduction

This repo contains the necessary tools and packages that are used to build out Vintrace wine search app.

## Project Highlights

* [UX] - Search input auto focuses on page load 🤯
* [UX] - Responsive ✨
* [UX] - Persistant wine details view tab based on users last selection (localStorage) top	🐘
* [UX] - Localise units formatting (liters) 🇫🇷
* [Accessibility] - Autocomplete component respects WCAG AA recommendations 💥
* [Accessibility] - Wine details tab component respects WCAG AA recommendations 🌈
* [Code] - App uses [Tailwind](https://tailwindcss.com/) utility css library for theming and smaller bundle size 🔥
* [Code] - Over engineered component structure to emphasise composability and reuse! 😍
* [Testing] - Some unit test coverage for edge cases 🤠

## Possible Improvements
* Monorepo - Using a tool like Yarn/NPM workspaces break discrete areas of application up into smaller packages to promote maintainabilty, discoverabilty (components) and reuse. 🚝
* Retrieve larger dataset from API to properly test UI and edge cases
* E2E testing of primary user flows (i.e. Cypress)
* Animations to improve usability i.e. Slide animation on "show/hide more" wine details rows
* Add component documentation and sandbox (i.e. Storybook)
  
## Getting started

### 1. Install global dependencies

The [rodleviton/vintrace](https://github.com/rodleviton/vintrace) repo has a number of global dependencies:

1. [node](https://nodejs.org/en/) — javaScript runtime built on Chrome's V8 JavaScript engine.
2. [npm](https://www.npmjs.com/get-npm) — Node package manager (Specific versions will be bundled with Node but can be upgraded independently if required).

### 2. Set up the repository

#### Clone the repo

```bash
cd [somewhere/you/keep/code]
git clone git@github.com:rodleviton/vintrace.git

> (Requires [ssh keys](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) to be configured)

#### Install dependencies

```bash
# install dependencies
cd vintrace
npm install
```

### 3. Run web application locally

```bash
npm start
```

## Folder structure

Following is a breakdown of the application folder structure.

```markdown
├── /
└── src/
    ├── assets - static images to be imported into components
    ├── components - shared application components
    ├── hooks - shared application hooks
    └── pages - main page route components
```

## Tips & Tricks

### Managing Node Versions

To assist with more easily managing node versions across projects, this folder includes an `.nvmrc` file that contains the recommended node version for this project. If you are using [NVM](https://github.com/nvm-sh) to manage your node version you can configure your bash profile to automatically change your node version to the version specified in the `.nvmrc` file. Follow the guide [here](https://github.com/nvm-sh/nvm#nvmrc).