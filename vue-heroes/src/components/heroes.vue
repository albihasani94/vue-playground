<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
    </div>
    <div class="columns" v-if="!selectedHero" >
      <div class="column is-8" v-show="heroes.length">
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
      <div class="notification is-info" v-show="message">
        <pre>{{ message }}</pre>
      </div>
    </div>
    <HeroDetail v-if="selectedHero" :hero="selectedHero"
    @cancel="cancelHero" @save="saveHero" />
  </div>
</template>

<script>
import { sharedHooks, data } from '../shared';
import HeroDetail from '@/components/hero-detail';

export default {
  name: 'Heroes',
  data() {
    return {
      selectedHero: undefined,
      heroes: [],
      message: '',
    };
  },
  components: {
    HeroDetail,
  },
  mixins: [sharedHooks],
  async created() {
    await this.loadHeroes();
    console.log('hello from heroes [created]');
  },
  methods: {
    cancelHero() {
      this.selectedHero = undefined;
    },
    saveHero(hero) {
      const index = this.heroes.findIndex(h => h.id === hero.id);
      this.heroes.splice(index, 1, hero);
      this.heroes = [...this.heroes];
      this.selectedHero = undefined;
    },
    clearPower() {
      this.selectedHero.power = '';
    },
    async loadHeroes() {
      this.heroes = [];
      this.message = 'Getting the heroes, please be patient.';
      this.heroes = await data.getHeroes();
      this.message = '';
    },
  },
};
</script>
