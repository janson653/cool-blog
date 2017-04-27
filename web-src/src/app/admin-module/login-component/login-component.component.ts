import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  providers: [AuthService]
})
export class LoginComponentComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router, private authservice: AuthService) {
  }

  ngOnInit() {
    // reset login status
    this.authservice.logout();
  }

  login() {
    this.loading = true;
    var result = this.authservice.login(this.model.username, this.model.password);
    if (result === true) {
      // login successful
      this.router.navigate(['/']);
    } else {
      // login failed
      this.error = 'Username or password is incorrect';
      this.loading = false;
    }

  }


}
