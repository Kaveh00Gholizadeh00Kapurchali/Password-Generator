import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-password-generator',
  styleUrl: './password-generator.css',
  templateUrl: './password-generator.html',
})
export class PasswordGenerator {


  password = signal('');
  generate(){
    const chars : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?~`"

    let pass = '';

    for(let i = 0 ; i < 12 ; i++){
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    this.password.set(pass);
  }


}
