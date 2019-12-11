import * as axios from 'axios';
import { format } from 'date-fns';
import { inputDateFormat } from './constants';
import { API } from './config';

const getHeroes = async function () {
  const response = await axios.get(`${API}/heroes.json`);
  const heroes = response.data.map(hero => {
    hero.originDate = format(new Date(hero.originDate), inputDateFormat);
    return hero;
  });
  return heroes;
};

export const data = {
  getHeroes,
};
