import { Component } from '@angular/core';
import { UserService } from '../../Cors/Services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  constructor(private authService: UserService, private router: Router) { }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        // Effacer les données utilisateur locales ou effectuer d'autres actions
        // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Logout failed', error);
      }
    });
  }
  

}
