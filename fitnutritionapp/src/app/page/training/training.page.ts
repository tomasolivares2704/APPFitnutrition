import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController // Corregido aquí
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '',
      message: '"FitNutrition es una aplicación diseñada para brindar apoyo a los usuarios en su búsqueda de un estilo de vida saludable. Queremos dejar claro que FitNutrition no reemplaza la orientación profesional de un preparador físico ni de un entrenador personal. Nuestra principal misión es proporcionar información de manera sencilla y transparente, compartiendo datos relevantes que puedan ser útiles para nuestros usuarios. Siempre recomendamos que, antes de realizar cualquier cambio significativo en su dieta o rutina de ejercicios, los usuarios consulten con profesionales de la salud y el fitness para obtener asesoramiento personalizado. FitNutrition está aquí para informar y apoyar en su viaje hacia el bienestar."',
      buttons: ['OK'],
    });

    await alert.present();
  }

  gotoCROSSFIT() {
    this.router.navigate(['training/crossfit']); // Corregido aquí (croosfit -> crossfit)
  }
  
  gotoYOGA() {
    this.router.navigate(['home/home']); // Corregido aquí (home/home -> training/yoga)
  }

  gotoPESAS() {
    this.router.navigate(['training/pesas']);
  }

  gotoRUTINAS() {
    this.router.navigate(['training/rutinas']);
  }

  ngOnInit() {
    
  }
}
