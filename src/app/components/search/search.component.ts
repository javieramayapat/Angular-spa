import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/Servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  terminoDeBusqueda: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesSerivice: HeroesService
  ) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.terminoDeBusqueda = params['nombre'];
      // console.log(params['nombre']);
      this.heroes = this.heroesSerivice.buscarHeroe(params['nombre']);
      console.log(this.heroes);
    })

  }

}
