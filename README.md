# Roll20 Svelte template

This template repository allows the creation of [custom roll20 sheets](https://wiki.roll20.net/Building_Character_Sheets) using the [Svelte](https://svelte.dev/) frontend framework

### Advantages of using Svelte
Svelte is very easy to use, if you know HTML/CSS/JS, you can get started with Svelte right away.
In addition, it is very easy to integrate with multiple languages, such as TypeScript, PUG, Sass, Less, CoffeeScript, etc. In particular, this template is pre-configured to work with TypeScript, Sass/Scss and PUG out of the box. Using these languages is, of course, optional, and you can keep using regular HTML/CSS/JS if you prefer.
Svelte also allows you break up your code into multiple files, avoiding the monolithic HTML and CSS files that usually result from working without a framework
Another feature that is personally one of my favorites, is component-scoped styles, that is, if you add a `style` tag to your markup and inside it use a selector that targets all `div` elements, only the `div`s defined inside that same file will be affected, rather than all `div`s globally

### Usage
In order to use this template, you will need to have [Node.js](https://nodejs.org) installed on your computer

* Start by downloading this template either by cloning it with `git` or downloading it using the `code` button above
* Open a terminal in the root directory of the template and run `npm install` to download all the dependencies
* Open the file `src/sheet/sheet.svelte` and edit it to your liking. You can use standard HTML/CSS
* In the terminal, run `npm run build`. This will create a directory named `build` and put all the sheet's files inside it (`sheet.html`, `sheet.css`, `sheet.json`, `README.md`, etc.)
* You can run `npm run build:watch` in order to build the sheet automatically every time you make changes to any of the files
* You could also run `npm run dev` in order to test your sheet in a browser and reload changes automatically. However, any roll20 specific features won't work this way