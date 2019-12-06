<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
    </div>
    <div class="columns">
      <div class="column is-3">
        <header class="card-header">
          <p class="card-header-title">heroes list</p>
        </header>
        <ul class="list is-hoverable">
          <li v-for="hero in heroes" :key="hero.id">
            <a
              class="list-item"
              @click="selectedHero = hero"
              :class="{'is-active': selectedHero === hero}"
            >
              <span>{{ hero.firstName }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="columns" v-if="selectedHero">
      <div class="column is-8">
        <div class="card edit-detail">
          <header class="card-header">
            <!-- Using interpolation -->
            <p class="card-header-title">{{ selectedHero.firstName }}</p>
            <!-- same as v-text="selectedHero.firstName" -->
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label" for="id">id</label>
                <label class="input" id="id" readonly>{{ selectedHero.id }}</label>
              </div>
              <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="selectedHero.firstName" />
              </div>
              <div class="field">
                <label for="show" class="checkbox">
                  show more
                  <input 
                    type="checkbox" 
                    class="is-primary" 
                    id="show" 
                    v-model="showMore" />
                </label>
              </div>
              <div class="field" v-show="showMore">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="selectedHero.lastName" />
              </div>
              <div class="field" v-show="showMore">
                <label class="label" for="description">description</label>
                <textarea
                  class="input"
                  id="description"
                  type="text"
                  v-model="selectedHero.description"
                />
              </div>
              <div class="field">
                <label class="label">cape color</label>
                <label class="radio" for="color-red">
                  <input type="radio" id="color-red" value="red" v-model="selectedHero.capeColor" />
                  red
                </label>
                <label class="radio" for="color-blue">
                  <input type="radio" id="color-blue" value="blue" v-model="selectedHero.capeColor" />
                  blue
                </label>
                <label class="radio" for="color-black">
                  <input
                    type="radio"
                    id="color-black"
                    value="black"
                    v-model="selectedHero.capeColor"
                  />
                  black
                </label>
                <div class="color-line" :style="{ 'background-color': selectedHero.capeColor }"></div>
              </div>
              <div class="field">
                <label for="power">
                  super power
                  <div class="select is-primary">
                    <select
                      id="power"
                      v-model="selectedHero.power"
                      @keyup.esc="clearPower"
                      :class="{ invalid: !selectedHero.power }"
                    >
                      <option disabled value>Please select one</option>
                      <option>Speed</option>
                      <option>Flight</option>
                      <option>Strength</option>
                      <option>Being dark</option>
                    </select>
                  </div>
                </label>
              </div>
              <div class="field">
                <label class="checkbox" for="active">
                  active
                  <input
                    type="checkbox"
                    class="is-primary"
                    id="active"
                    v-model="selectedHero.active"
                  />
                </label>
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <!-- full signature -->
            <button class="link card-footer-item cancel-button" v-on:click="cancelHero">
              <i class="fas fa-undo"></i>
              <span>Cancel</span>
            </button>
            <!-- shortcut signature -->
            <button class="link card-footer-item" @click="saveHero">
              <i class="fas fa-save"></i>
              <span>Save</span>
            </button>
          </footer>
        </div>
        <div class="notification is-info">
          <pre>{{ message }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: undefined,
      showMore: false,
      heroes: [
        {
          id: 1,
          firstName: 'Bruce',
          lastName: 'Wayne',
          description: 'Depressed',
          capeColor: 'black',
          power: '',
          active: true,
        },
        {
          id: 10,
          firstName: 'Ella',
          lastName: 'Papa',
          description: 'fashionista',
        },
        {
          id: 20,
          firstName: 'Madelyn',
          lastName: 'Papa',
          description: 'the cat whisperer',
        },
        {
          id: 30,
          firstName: 'Haley',
          lastName: 'Papa',
          description: 'pen wielder',
        },
        {
          id: 40,
          firstName: 'Landon',
          lastName: 'Papa',
          description: 'arc trooper',
        },
      ],
      message: 'Gotham',
    };
  },
  methods: {
    cancelHero() {
      this.message = '';
    },
    saveHero() {
      this.message = JSON.stringify(this.selectedHero, null, '\n');
    },
    clearPower() {
      this.selectedHero.power = '';
    },
  },
};
</script>
