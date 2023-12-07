import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', // Ruta relativa al archivo TypeScript
  styleUrls: ['./login.page.scss'], // Si tienes un archivo de estilos
})

export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    // Lógica para autenticar al usuario
    // ...

    // Ejemplo de redirección después de iniciar sesión exitosamente
    this.navCtrl.navigateForward('/home');
  }

  loginUser() {
    // Lógica para iniciar sesión
    // Por ejemplo, verificar credenciales
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Autenticación exitosa, redirigir a la página principal
      this.navCtrl.navigateForward('/home');
    } else {
      // Mostrar mensaje de error al usuario
      console.log('Credenciales incorrectas');
    }
  }

  recoverPassword() {
    // Lógica para recuperar la contraseña
    // Por ejemplo, redirigir a la página de recuperación de contraseña
    this.navCtrl.navigateForward('/forgot-password');
  }

  forgotPassword() {
    // Lógica para el proceso de recuperación de contraseña
    // Por ejemplo, redirigir a la página de recuperación de contraseña
    this.navCtrl.navigateForward('/forgot-password');
  }

  register() {
    // Lógica para redirigir a la página de registro
    this.navCtrl.navigateForward('/register');
  }
}
