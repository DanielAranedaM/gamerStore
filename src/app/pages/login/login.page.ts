import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', // Ruta relativa al archivo TypeScript
  styleUrls: ['./login.page.scss'], // Si tienes un archivo de estilos
})

export class LoginPage implements OnInit {
  
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  })
  constructor() {}

  ngOnInit(){

  }
}
