import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://my-json-server.typicode.com/VadimPeczynski/JsonServerDemo/heroes/";

export function getHeroes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getHeroById(heroId) {
  return fetch(baseUrl + heroId)
    .then(handleResponse)
    .catch(handleError);
}

export function saveHero(hero) {
  return fetch(baseUrl + (hero.id || ""), {
    method: hero.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hero),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteHero(heroId) {
  return fetch(baseUrl + heroId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
