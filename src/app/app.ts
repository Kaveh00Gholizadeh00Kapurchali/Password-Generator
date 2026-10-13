import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PasswordGenerator } from './password-generator/password-generator';
@Component({
  imports: [RouterOutlet, PasswordGenerator],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Password-Generator');
}
