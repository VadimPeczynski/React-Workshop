import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function heroReducer(state = initialState.heroReducer, action) {
  switch (action.type) {
    case types.TOGGLE_SHOW_IMAGE:
      return {
        ...state,
        showImage: !state.showImage,
      };
    case types.LOAD_HEROES_SUCCESS:
      return {
        ...state,
        data: action.heroes,
      };
    case types.CREATE_HERO_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.hero],
      };
    case types.UPDATE_HERO_SUCCESS:
      return {
        ...state,
        data: state.data.map((hero) =>
          action.hero.id === hero.id ? action.hero : hero
        ),
      };
    default:
      return state;
  }
}
