
import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){

  }

  login(): void {
    this.authService.login(this.user, this.password).subscribe({
      next: ()=> this.router.navigate(['/dashboard']),
      error: (err) => console.error('Login failed', err)
    })
  }

}
