<template>
  <div>
    <div class="columns">
      <div class="column is-8">
        <div class="card edit-detail">
          <header class="card-header">
            <!-- Using interpolation -->
            <p class="card-header-title">{{ fullName }}</p>
            <!-- same as v-text="fullName" -->
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label" for="id">id</label>
                <label class="input" id="id" readonly>{{ clonedHero.id }}</label>
              </div>
              <div class="field">
                <label class="label" for="firstName">first name</label>
                <input class="input" id="firstName" v-model="clonedHero.firstName" />
              </div>
              <div class="field">
                <label for="show" class="checkbox">
                  show more
                  <input type="checkbox" class="is-primary" id="show" v-model="showMore" />
                </label>
              </div>
              <div class="field" v-show="showMore">
                <label class="label" for="lastName">last name</label>
                <input class="input" id="lastName" v-model="clonedHero.lastName" />
              </div>
              <div class="field" v-show="showMore">
                <label class="label" for="description">description</label>
                <textarea class="input" id="description" type="text" v-model="clonedHero.description" />
              </div>
              <div class="field">
                <label class="label">cape color</label>
                <label class="radio" for="color-red">
                  <input type="radio" id="color-red" value="red" v-model="clonedHero.capeColor" />
                  red
                </label>
                <label class="radio" for="color-blue">
                  <input type="radio" id="color-blue" value="blue" v-model="clonedHero.capeColor" />
                  blue
                </label>
                <label class="radio" for="color-black">
                  <input type="radio" id="color-black" value="black" v-model="clonedHero.capeColor" />
                  black
                </label>
                <div class="color-line" :style="{ 'background-color': clonedHero.capeColor }"></div>
              </div>
              <div class="field">
                <label for="power">
                  super power
                  <div class="select is-primary">
                    <select
                      id="power"
                      v-model="clonedHero.power"
                      @keyup.esc="clearPower"
                      :class="{ invalid: !clonedHero.power }"
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
                  <input type="checkbox" class="is-primary" id="active" v-model="clonedHero.active" />
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
            <button class="link card-footer-item" @click="saveHero()">
              <i class="fas fa-save"></i>
              <span>Save</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sharedHooks } from '../shared';

export default {
  name: 'HeroDetail',
  props: {
    hero: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      clonedHero: { ...this.hero },
      showMore: false,
    };
  },
  methods: {
    cancelHero() {
      // this.hero = undefined;
      this.$emit('cancel');
    },
    saveHero() {
      // this.message = JSON.stringify(this.clonedHero, null, '\n');
      this.$emit('save', this.clonedHero);
    },
  },
  mixins: [sharedHooks],
  created () {
      console.log('hello from hero-detail [created]');
  },
  computed: {
    fullName() {
      return `${this.clonedHero.firstName} ${this.clonedHero.lastName}`;
    },
  },
};
</script>