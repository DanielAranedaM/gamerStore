import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/util.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.mode';

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
    this.user = this.utilSvc.getFromLocalStorage('user');
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

      let path = `users/${this.user.uid}/productos`

      const cargando = await this.utilSvc.cargando();
      await cargando.present();

      //subir imagen
      let dataUrl = this.form.value.imagen;
      let imagenPath = `${this.user.uid}/${Date.now()}`;
      let imagenUrl = await this.firebaseSvc.subirImagen(imagenPath, dataUrl);
      this.form.controls.imagen.setValue(imagenUrl);

      delete this.form.value.id;

      this.firebaseSvc.addItem(path, this.form.value).then(async res =>{

        this.utilSvc.cerrarModal({success:true});

        this.utilSvc.presentarToast({
          message: 'Producto creado correctamente :D!!',
          duration: 1000,
          color: 'success',
          position: 'middle',
          icon: 'checkmark-circle-outline'
        })

      }).catch(error => {
        console.log(error);
        
        this.utilSvc.presentarToast({
          message: error.mesage,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'
        })
      })
    
    }
  }

}
