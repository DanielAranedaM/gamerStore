import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/util.service';
import { AddUpdateProductoComponent } from 'src/app/shared/components/add-update-producto/add-update-producto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private firebaseSvc:FirebaseService,
    private utilsSvc:UtilsService
    ) { }

  ngOnInit() {
  }

  //Salir de la cuenta
  cerrarSesion(){
    this.firebaseSvc.auth.signOut();
  }

  //Agregar y actualizar el producto
  actualizarProducto(){
    this.utilsSvc.mostrarModal({
      component: AddUpdateProductoComponent,
      cssClass: 'add-update-modal'
    })
  }

}
