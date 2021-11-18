import * as heroApi from "../../api/heroesApi";
import * as types from "./actionTypes";

export function toggleShowImage() {
  return { type: types.TOGGLE_SHOW_IMAGE };
}

export function loadHeroesSuccess(heroes) {
  return { type: types.LOAD_HEROES_SUCCESS, heroes };
}

export function createHeroSuccess(hero) {
  return { type: types.CREATE_HERO_SUCCESS, hero };
}

export function updateHeroSuccess(hero) {
  return { type: types.UPDATE_HERO_SUCCESS, hero };
}

export function loadHeroes() {
  return function (dispatch) {
    return heroApi
      .getHeroes()
      .then((heroes) => {
        dispatch(loadHeroesSuccess(heroes));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveHero(hero) {
  return function (dispatch) {
    return heroApi
      .saveHero(hero)
      .then((savedHero) => {
        hero.id
          ? dispatch(updateHeroSuccess(savedHero))
          : dispatch(createHeroSuccess(savedHero));
      })
      .catch((error) => {
        throw error;
      });
  };
}
