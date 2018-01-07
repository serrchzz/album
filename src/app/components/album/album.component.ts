import { Component } from '@angular/core';
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html'
})
export class AlbumComponent {

  constructor( public _ps: ProductosService ) { }


}
