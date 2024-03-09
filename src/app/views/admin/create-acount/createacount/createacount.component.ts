import { Component } from '@angular/core';
import { UserService } from './../../../../Cors/Services/UserService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createacount',
  templateUrl: './createacount.component.html',
  styleUrl: './createacount.component.css'
})
export class CreateacountComponent {
  name!: string;
  email!: string;
  password!: string;
  repeatPassword!: string;

  constructor(private userService: UserService,private route:Router) { }

  signup() {
    const signupDto = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    console.log(signupDto);

    this.userService.signup(signupDto)
      .subscribe(response => {
        const token = response.token;
        this.route.navigate(['admin/allacounts'])
        // Faites quelque chose avec le token, par exemple enregistrez-le dans le localStorage
      }, error => {
        // Traitez l'erreur
      });
  }  

}
