import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/teams/";

export function getTeams() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
