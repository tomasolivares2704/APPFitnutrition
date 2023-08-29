import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-croosfit',
  templateUrl: './croosfit.page.html',
  styleUrls: ['./croosfit.page.scss'],
})
export class CroosfitPage implements OnInit {
  constructor(private router: Router){}

  gotoejercicios(){
    this.router.navigate(['/croos-ejercicios'])
  }

  ngOnInit() {}
}
