import { Component, OnInit } from '@angular/core';
import { GetphotosService } from '../../services/getphotos.service';
import { albuminterface } from '../../interfaces/album';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private getphotos: GetphotosService) {
    this.getphotos.traerfotos().subscribe(arr => {
      let lista: albuminterface[] = [];
      arr.forEach(item => {
        lista = [...lista, ...item]
      })
      console.log(lista);
    })
   }

  async  ngOnInit() {
    
  }

}
