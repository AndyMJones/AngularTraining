import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  }

  showAlert = false;
  alertMessage = 'Please wait! We are logging you in.'
  alertColor = 'blue';
  isSubmitting = false;

  constructor(private auth: AuthService) {

  }

  async login() {
    this.showAlert = true;
    this.alertMessage = 'Please wait! We are logging you in.';
    this.alertColor = 'blue';
    this.isSubmitting = true;

    try {
      await this.auth.login(this.credentials.email, this.credentials.password);
    } catch(error) {
      this.isSubmitting = false;
      this.alertMessage = 'An unexpected error occured. Please try again later.';
      this.alertColor = 'red';
      
      console.log(error);

      return;
    }
 
    this.alertMessage = 'Success! You are now logged in.';
    this.alertColor = 'green';
  }
}
