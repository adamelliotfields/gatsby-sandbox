# `gatsby-sandbox`

This is an example blog I made while learning Gatsby. I started with [`gatsby-start-blog`](https://github.com/gatsbyjs/gatsby-starter-blog),
and then just tried to figure out how it all worked before adding and removing plugins and tweaking
configuration settings.

The focus was on the basics and not advanced topics like multiple authors, external content sources,
RSS feeds, AMP pages, or Google Analytics.

Aside from a few Gatsby issues, it was easy to learn. I spent much longer tweaking the styles, which
is true for anything I work on.

There's still a few things I'd like to add:

- [ ] GitHub Action
- [ ] Dark mode
- [ ] About page
- [ ] Social share buttons
- [ ] Copy URL to clipboard button
- [ ] Estimated read time like Dan Abramov's coffee cup scale
- [ ] Show author info on hover like in Casper
- [ ] Show blog title after scrolling like in Capser
- [ ] Toggle list view and grid view
- [ ] Demonstrate pagination

## Getting Started

See [`.vscode`](./vscode) for recommended extensions and settings.

## Installation

```bash
npm install
```

## Usage

```bash
npm start

# or

npx gatsby develop
```

## Notes

There are some random libraries in `devDependencies` just to satisfy peer dependency warnings:

- `react-refresh@^0.8.2`: `gatsby@2.23.17` > `@pmmmwh/react-refresh-webpack-plugin@0.3.3`
- `typescript@>=2.8.0`: `gatsby@2.23.17` > `@typescript-eslint/eslint-plugin@2.24.0` > `tsutils@3.17.1`
