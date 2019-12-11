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
import HeroDetail from '@/components/hero-detail';
const ourHeroes = [
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
];
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
  created() {
    this.loadHeroes();
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
    async getHeroes() {
      return new Promise(resolve => {
        setTimeout(() => resolve(ourHeroes), 1500);
      });
    },
    async loadHeroes() {
      this.heroes = [];
      this.message = 'Getting the heroes, please be patient.';
      this.heroes = await this.getHeroes();
      this.message = '';
    },
  },
};
</script>
