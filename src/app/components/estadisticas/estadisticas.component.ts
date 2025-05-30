/*
4.1
1.en src/app/interfaces/juego.interface.ts.
2.juegos-data.service.ts que esta  en src/app/services/.
3.La configuración del HttpClient para la aplicación se define en el archivo main.ts, utilizando la función provideHttpClient() propia de Angular en su modalidad standalone.
4.2.
1.No incluye app,mules,ts porque al usaar standalone en el proyecto , se elimina la necesidad de modulos raiz 
2.Permite almacenr y distribuir el estado actualizado de los juegos a todos los componentes.
*/
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosDataService } from '../../services/juegos-data.service';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  totalJuegos: number = 0;
  juegosGratis: number = 0;
  juegosPago: number = 0;
  mejorJuego: any = null;
  promedioPrecio: number = 0;

  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.juegosService.getEstadisticas().subscribe(est => {
      this.totalJuegos = est.totalJuegos;
      this.juegosGratis = est.juegosGratis;
      this.juegosPago = est.juegosPago;
      this.mejorJuego = est.mejorRating;
      this.promedioPrecio = est.promedioPrecio;
    });
  }
}