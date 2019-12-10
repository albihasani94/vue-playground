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

- Data

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

## Event handling

- Full signature

```html
<button class="link card-footer-item cancel-button" v-on:click="cancelHero">
    <i class="fas fa-undo"></i>
    <span>Cancel</span>
</button>
```

- Shortcut

```html
<button class="link card-footer-item" @click="saveHero">
    <i class="fas fa-save"></i>
    <span>Save</span>
</button>
```

- Methods

```js
export default {
    name: 'Heroes',
    data(){},
    methods: {
        cancelHero() {
            this.message = '';
        },
        saveHero() {
            this.message = JSON.stringify(this.selectedHero, null, '\n');
    },
};
```

## Two-way binding

- v-model

```html
<div class="field">
    <label class="label" for="firstName">first name</label>
    <input class="input" id="firstName" v-model="selectedHero.firstName" />
</div>
```

## Key modifiers and class bindings

- @keyup.esc

```html
<select
    id="power"
    v-model="selectedHero.power"
    @keyup.esc="clearPower"
    :class="{ invalid: !selectedHero.power }"
>
```

> :class = "{ classname: expression }"

- Methods

```js
export default {
    name: 'Heroes',
    data(){},
    methods: {
        // ...
        clearPower() {
            this.selectedHero.power = '';
        },
    },
};
```

## Rendering lists

- v-for="item in itemList" :key="item.id"

```html
<li v-for="hero in heroes" :key="hero.id">
    <a class="list-item"
        @click="selectedHero = hero"
        :class="{'is-active': selectedHero === hero}">
        <span>{{ hero.firstName }}</span>
    </a>
</li>
```

> Bind to a unique :key for faster rendering

## Conditions

- v-if (*will not render the section at all*)

```html
<div class="columns" v-if="selectedHero">
```

- v-show (*will still render*)

```html
<div class="field" v-show="showMore">
```

## Computed properties

- They fire when any dependency value changes

```html
<p class="card-header-title">{{ fullName }}</p>
```

- Computed

```js
export default {
  name: 'Heroes',
  data() {},
  computed: {
    fullName() {
      return `${this.selectedHero.firstName} ${this.selectedHero.lastName}`;
    },
  },
```
