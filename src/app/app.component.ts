import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-examples-pipes';

  nombre:string    ="albert einstein";
  nombre2:string ="nOEliA muñOZ"
  array:number[]   =[1,2,3,4,5,6,7,8,9,10];
  PI:number        =Math.PI;
  porcentaje:number=0.234;
  salario:number   =12345;
  fecha:Date       =new Date();
  idioma:string='es';
  videoUrl:string="https://www.youtube.com/embed/5vTqK25umK4"
  activar:boolean=true;

  animal={
      nombre:'Misi',
      tipo:'gato',
      edad:4,
      cualidades:{
        pelo:'corto',
        raza:'siamés'
      }
}

  valorPromesa=new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('Datos recibidos');
    },4500);
  });





}
