import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  model = 'pets'

  constructor(private httpClient: HttpClient) {}

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  findOne(petId) {
    return this.httpClient.get(this.getUrlForId(petId));
  }

  create(pet) {
    return this.httpClient.post(this.getUrl(), pet);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(pet) {
    return this.httpClient.patch(this.getUrlForId(pet.id), pet);
  }

  delete(petId) {
    return this.httpClient.delete(this.getUrlForId(petId));
  }
}
