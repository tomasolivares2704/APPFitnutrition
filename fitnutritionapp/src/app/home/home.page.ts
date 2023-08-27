import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router){}

  gotoFOOD(){
    this.router.navigate(['/food'])
  }
  gotoHOME(){
    this.router.navigate(['/home'])
  }
  gotoTRAINING(){
    this.router.navigate(['/training'])
  }


}
