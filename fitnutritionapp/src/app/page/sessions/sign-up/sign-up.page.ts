import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  formularioSignUp: FormGroup;

  constructor(public fb: FormBuilder, private Router: Router) { 
    this.formularioSignUp = this.fb.group({
      'email': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'passwordConfirm': new FormControl("", Validators.required)
    });
  }

  goHall() {
    this.Router.navigate(['/hall']);
  }

  ngOnInit() {
  }
}
