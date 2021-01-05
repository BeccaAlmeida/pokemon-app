import { Pokemons } from './../../models/Pokemons';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class ApiService {
  private API_URL: string = 'https://pokeapi.co/api/v2/pokemon/1';
  listaPokemons: Pokemons[];

  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get<Pokemons[]>(`${this.API_URL}`)
    this.listaPokemons;
  }
}
