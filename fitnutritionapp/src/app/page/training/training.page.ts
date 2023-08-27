import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(private router: Router){}

  gotoCROSSFIT(){
    this.router.navigate(['training/croosfit'])
  }
  gotoYOGA(){
    this.router.navigate(['home/home'])
  }
  gotoPESAS(){
    this.router.navigate(['training/pesas'])
  }
  gotoRUTINAS(){
    this.router.navigate(['training/rutinas'])
  }


  ngOnInit() {
    
  }


}
