import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value

    if (valor.length !== 0) { // validacion para vacios

      this.gifsService.buscarGifs(valor)
      this.txtBuscar.nativeElement.value = "" //sirve para borrar el contenido del input

    }


  }
}

// @ViewChild = nos permite buscar referencias en el html
