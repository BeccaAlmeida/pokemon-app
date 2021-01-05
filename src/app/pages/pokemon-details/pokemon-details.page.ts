import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/models/Pokemons';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  listaPokemons: Pokemons[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listarPokemons();
  }

  listarPokemons() {
    this.apiService.getPokemon<Pokemons[]>().subscribe(data => {
      this.listaPokemons;
    })      
  }
}
