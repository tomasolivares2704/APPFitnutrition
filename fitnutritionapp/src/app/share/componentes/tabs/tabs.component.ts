import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

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



  ngOnInit() {
    
  }

  

}
