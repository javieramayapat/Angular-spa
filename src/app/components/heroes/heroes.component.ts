import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/Servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[];
  
  constructor( private heroesService:HeroesService, private router:Router) {  
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
    
  }

  /**
   * verHeroe()
   * 
   * Ver la vista detallada de un heroe especifico.
   * 
   * @description Función encargada de mostrar el componente de un héroe en base
   *              al id que se manda al presionar el botón de ver más.
   *              Para hacer una navegación desde código es necesario inyectar en
   *              el constructor el componente ruter que a travez de la función 
   *              navigate puede producir el mismo efecto que el usar un routerLink 
   *              desde HTML.
   * 
   * @param i number
   * 
   */
  verHeroe(i:number){
      this.router.navigate(['/heroe',i]);
  }

}
