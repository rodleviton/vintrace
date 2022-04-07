# Vintrace 🍷

**Wine search app**

## Introduction

This repo contains the necessary tools and packages that are used to build out Vintrace wine search app. This document aims to give you a detailed overview of the different parts that make up the Vintrace wine search app front-end application and instructions on how to run them.

## Prerequisites

The repository uses [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to independently manage the dependencies of each of the marquee offers pages. For more info on a specific package, see its respective `README`.

## Getting started

### 1. Install global dependencies

The [rodleviton/vintrace](https://github.com/rodleviton/vintrace) repo has a number of global dependencies:

1. [node](https://nodejs.org/en/) — javaScript runtime built on Chrome's V8 JavaScript engine.
2. [npm](https://www.npmjs.com/get-npm) — Node package manager (Specific versions will be bundled with Node but can be upgraded independently if required).
3. [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) Package manager and Monorepo orchestrator

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
yarn install
```

> This command can be run from within a specific workspace folder but will install dependencies for **all** workspaces regardless.

### 3. Run web application locally

```bash
yarn start # this will run the main vintrace app
```

## Workspaces structure

Following is a breakdown of all the packages currently contained within the monorepo.

```markdown
├── / - root workspace.
├── app/ - main front-end application.
└── @vintrace/
    ├── storybook - Vintrace's component documentation.
    └── components - Vintrace's shared component library.
```

> Refer to each workspace README.md for specific documentation.

## Tips & Tricks

### Managing Node Versions

To assist with more easily managing node versions across projects, this folder includes an `.nvmrc` file that contains the recommended node version for this project. If you are using [NVM](https://github.com/nvm-sh) to manage your node version you can configure your bash profile to automatically change your node version to the version specified in the `.nvmrc` file. Follow the guide [here](https://github.com/nvm-sh/nvm#nvmrc).