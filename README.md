# Game

## Description:
Game is a live action strategy board game where two players place various pieces on a grid in an attempt to distroy the opposing player's targets.

## Pieces

*Triangle*

Triangle shoots in a straight line toward the opposing players side.

*Square*

Square acts as a barricade and is dificult to destroy.

*Hexagon*

Hexagon shoots in a single direction but can be rotated.

*Circle*

Circle emits strong bursts of proximity damage. Anything within range will be easily destroyed.

## Mana

Every piece will cost mana to place. It will cost a different amount of mana to place each piece.
Each player begins a match with a given amount of mana. Mana is earned by destroying the opponents pieces and targets.

## Upgrades

Every piece can be upgraded three times. Upgrades cost mana. Each level of upgrade will cost an increasing amount of mana.
Upgrades increase the effectiveness of each piece. For shooting pieces, the frequency, speed, and power of the projectile
is increased with each upgrade.

For the *Square* piece, the total HP is increased with each upgrade. Each time a square is upgraded it's HP is restored to the maximum
HP designated to the given upgrade level.

For the *Circle* piece, each upgrade increases the radius or the power of the proximity burst.

## Winning

The first player to destroy the opposing player's targets will win the match.

# Development

## Forked From Preact Boilerplate / Starter Kit

[![Build Status](https://travis-ci.org/developit/preact-boilerplate.svg?branch=master)](https://travis-ci.org/developit/preact-boilerplate)
[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/developit/preact)

# Quick-Start Guide

- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Structure](#structure)
- [CSS Modules](#css-modules)
- [Handling URLS](#handling-urls)
- [React Compatibility](#react-compatibility)


## Installation

**1. Install the dependencies:**

```sh
npm install
```

> You're done installing! Now let's get started developing.



## Development Workflow


**2. Start a live-reload development server:**

```sh
npm run dev
```

> This is a full web server nicely suited to your project. Any time you make changes within the `src` directory, it will rebuild and even refresh your browser.

**3. Testing with tape:**

```sh
npm test
```

> 🌟 This also instruments the code in `src/` using [isparta](https://github.com/douglasduteil/isparta), giving you pretty code coverage statistics at the end of your tests! If you want to see detailed coverage information, a full HTML report is placed into `coverage/`.

**4. Generate a production build in `./build`:**

```sh
npm run build
```

> You can now deploy the contents of the `build` directory to production!
>
> **[Surge.sh](https://surge.sh) Example:** `surge ./build -d my-app.surge.sh`
> 
> **[Netlify](https://www.netlify.com/docs/cli/) Example:** `netlify deploy`
>
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/developit/preact-boilerplate)


**5. Start local production server with [serve](https://github.com/zeit/serve):**

```sh
npm start
```

> This is to simulate a production (CDN) server with gzip. It just serves up the contents of `./build`.



---

## CSS Modules

This project is set up to support [CSS Modules](https://github.com/css-modules/css-modules).  By default, styles in `src/style` are **global** (not using CSS Modules) to make global declarations, imports and helpers easy to declare.  Styles in `src/components` are loaded as CSS Modules via [Webpack's css-loader](https://github.com/webpack/css-loader#css-modules).  Modular CSS namespaces class names, and when imported into JavaScript returns a mapping of canonical (unmodified) CSS classes to their local (namespaced/suffixed) counterparts.

When imported, this LESS/CSS:

```css
.redText { color:red; }
.blueText { color:blue; }
```

... returns the following map:

```js
import styles from './style.css';
console.log(styles);
// {
//   redText: 'redText_local_9gt72',
//   blueText: 'blueText_local_9gt72'
// }
```

Note that the suffix for local classNames is generated based on an md5 hash of the file. Changing the file changes the hash.


---


## Handling URLS

:information_desk_person: This project contains a basic two-page app with [URL routing](http://git.io/preact-router).

Pages are just regular components that get mounted when you navigate to a certain URL. Any URL parameters get passed to the component as `props`.

Defining what component(s) to load for a given URL is easy and declarative. You can even mix-and-match URL parameters and normal props.

```js
<Router>
  <A path="/" />
  <B path="/b" id="42" />
  <C path="/c/:id" />
</Router>
```


---


## React Compatibility

This project includes [preact-compat] alias in as `react` and `react-dom` right out-of-the-box.  This means you can install and use third-party React components, and they will use Preact automatically!  It also means that if you _don't_ install third-party React components, `preact-compat` doesn't get included in your JavaScript bundle - it's free if you don't use it 👍

---


## License

MIT


[Preact]: https://github.com/developit/preact
[preact-compat]: https://github.com/developit/preact-compat
[webpack]: https://webpack.github.io
