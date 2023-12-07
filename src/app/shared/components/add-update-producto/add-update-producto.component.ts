import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/util.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-update-producto',
  templateUrl: './add-update-producto.component.html',
  styleUrls: ['./add-update-producto.component.scss'],
})
export class AddUpdateProductoComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    imagen: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required, Validators.min(0)]),
    unidadesVendidas: new FormControl('', [Validators.required, Validators.min(0)]),
  })

  constructor(
    private utilSvc:UtilsService,
    private firebaseSvc:FirebaseService
  ) { }

    user = {} as User;

  ngOnInit() {
    this.user
  }

    async tomarImagen(){
      const dataUrl = (await this.utilSvc.takePic('Imagen producto')).dataUrl;
      this.form.controls.imagen.setValue(dataUrl);
    }

  cerrarModal(){
    this.utilSvc.cerrarModal();
  }

  async subir(){
    if(this.form.valid){

      let path = `users/${this.}`

      const cargando = await this.utilSvc.cargando();
      await cargando.present();

    
    }
  }

}
