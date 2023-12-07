import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.mode';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/util.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.minLength(4), Validators.required])
  })

  //**Inyectando servicio de firebase*/
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit(){

  }
  
  async submit(){
    if(this.form.valid){
      this.firebaseSvc.singUp(this.form.value as User).then(async res => {

        await this.firebaseSvc.updateUser(this.form.value.name)
        console.log(res);
      })
    };
  }
  
}


