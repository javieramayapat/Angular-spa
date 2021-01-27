import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  /* 
    EL @input le especifica a angular que una propiedad
    la voya recibir desde afuera.

    En dado caso de que no venga ningun valor de afuera
    se tomara el valor inicializado desde el componenete.
  */
  @Input() heroe: any = {};
  @Input() i: number;

  @Output() heroeSelecionado: EventEmitter<number>;

  constructor(private router:Router) { 
    this.heroeSelecionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // this.router.navigate(['/heroe',this.i]);
    this.heroeSelecionado.emit( this.i);
}

}
