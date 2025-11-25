import { Component, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  manterLogado = false;
  mostrarSenha = false;
  loginInvalido = false; 

  constructor(private router: Router) {}

  @Output() loginSucesso = new EventEmitter<void>();

  alternarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  fazerLogin() {
    if (this.usuario === 'admin' && this.senha === '123456789') {
      
      this.loginInvalido = false;
      console.log('Login autorizado! Indo para Home...');
      
      this.router.navigate(['/home']); 

    } else {
      this.loginInvalido = true;
      setTimeout(() => {
        this.loginInvalido = false;
      }, 3000);
    }
  }
}