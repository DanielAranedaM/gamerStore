import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.mode';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', // Ruta relativa al archivo TypeScript
  styleUrls: ['./login.page.scss'], // Si tienes un archivo de estilos
})

export class LoginPage implements OnInit {
  
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    contrasena: new FormControl('', [Validators.required])
  })

  //**Inyectando servicio de firebase*/
firebaseSvc = inject(FirebaseService);

  ngOnInit(){

  }
  
  submit(){
    if(this.form.valid){
      this.firebaseSvc.singIn(this.form.value as User).then(res => {
        console.log(res);
      })
    };
  }
  
}
