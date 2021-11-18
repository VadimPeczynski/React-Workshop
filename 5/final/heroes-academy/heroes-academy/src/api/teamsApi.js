import { handleResponse, handleError } from "./apiUtils";
const baseUrl =
  "https://my-json-server.typicode.com/VadimPeczynski/JsonServerDemo/teams/";

export function getTeams() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
