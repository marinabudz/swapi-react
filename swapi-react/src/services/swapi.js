export default class SwapiService {
  _mainURl = "https://swapi.dev/api";
  //url буде те що ми в подальшому вкажемо для пошуку інфи
  async getResource(url) {
    const response = await fetch(`${this._mainURl}${url}`);
    if (!response.ok) {
      throw new Error(
        `Could not fetch URL ${response.url} received ${response.status}`
      );
    }
    return await response.json();
  }
  async getAllPeople() {
    const response = await this.getResource("/people/");
    return response.results;
  }
  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const response = await this.getResource("/planets/");
    return response.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`);
  }

  async getAllStarships() {
    const response = await this.getResource("/starships/");
    return response.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`);
  }
}
