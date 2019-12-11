import * as axios from 'axios';
import { format } from 'date-fns';
import { inputDateFormat } from './constants';

const getHeroes = async function () {
  const response = await axios.get('api/heroes.json');
  const heroes = response.data.map(hero => {
    hero.originDate = format(new Date(hero.originDate), inputDateFormat);
    return hero;
  });
  return heroes;
};

export const data = {
  getHeroes,
};
