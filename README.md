# Proka4ka

**The technology used: PUG, SCSS, JS, Webpack, Gulp.**

## INSTALLATION

You shall see the following files and directories:

    assets/                  fonts, libraries
    img/                     images
    js/                      js files
    pug/                     pug files
    scss/                    scss files
    htaccess                 Apache web server config file

---

## REVIEW

### PUG

    components/              pug components
    layouts/                 base layout
    mixins/                  mixins
    index.pug                index page file

### SCSS

**[Sourse](https://matthiasott.com/notes/how-i-structure-my-css)**

```
    1-setting/               general project settings
    2-design-tokens/         variables for the typography, colors, spacing, media-queries, or any other attributes
    3-tools/                 global mixins and functions
    4-generic/               global box-sizing rules, CSS resets, or print styles –
                             anything that should be set right at the beginning of your CSS
    5-elements/              styles of headlines, buttons, links, lists, etc.
    6-skeleton/              wrappers, containers, grids, and all kinds of reusable objects that provide layout patterns.
    7-components/            design the components of the UI
    8-utilities/             utility and helper classes
    9_shame.scss             is a place for all the shameful CSS solutions like quick fixes
    index.scss               index style file
```

### JS

    modules/                 js modules
    index.js                 index file

---

## COMMANDS

```
    gulp start               start project
    gulp build               create a minimized build
    gulp deploy              deploy project

    or

    yarn start
    yarn build
    yarn deploy
```

## QUICK START

On command line, type in the following commands:

```
    cd ./yourRepository
    $ npm i
    $ npm start / yarn start
    ---
    Local: http://localhost:3000 (Example)
    Tunnel: https://tame-bulldog-69.loca.lt (Example)
```
