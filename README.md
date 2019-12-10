# Vue Playground

My vue theme park.

## Tooling

- [Node.js](https://nodejs.org/en/)
- Vue CLI
  - `npm install -g @vue/cli`

- Vetur and Vue Snippts for VSCode

  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [Vue Snippets for VSCode](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)

- Vue dev tools browser extensions

  - [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
  - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## Creating and Running a hello world project

```bash
vue create hello-world -d
npm run serve
```

## Building a project

```bash
npm run build
```

## Data Binding

- Full signature

```html
<a v-bind:href="github" target="_blank">
    <i class="fab fa-github fa-2x"></i>
</a>
```

- Shortcut (*I prefer this*)

```html
<a :href="twitter" target="_blank">
    <i class="fab fa-twitter fa-2x"></i>
</a>
```

## Displaying Text

- Full signature

```html
<p class="card-header-title" v-text="selectedHero.firstName"></p>
```

- Using interpolation

```html
<div class="notification is-info">
    <pre>{{ message }}</pre>
</div>
```

### Data

```js
export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: {
        id: 1,
        firstName: 'Bruce',
        lastname: 'Wayne',
        description: 'Depressed',
        capeColor: 'Black',
        power: 'Being dark',
        active: true,
      },
      message: 'Gotham',
    };
  },
};
```
