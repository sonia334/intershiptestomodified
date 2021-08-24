import { Component, OnInit } from '@angular/core';
import { GetphotosService } from '../../services/getphotos.service';
import { albuminterface } from '../../interfaces/album';
import { LoremIpsum } from "lorem-ipsum";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  public lista: albuminterface[]=[];
  public search: string = '';

  public lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: { 
      max: 16,
      min: 4
    }
  });
  constructor(private getphotos: GetphotosService, private router:Router) {
    this.getphotos.traerfotos().subscribe(arr => {
      
      arr.forEach(items => {
        items.forEach(item => item.text = this.lorem.generateSentences(1));
        this.lista = [...this.lista, ...items]
      })
      console.log(this.lista);
    })
   }

  public iraresultadobusqueda(){
    console.log(this.search)
    this.router.navigate(['search', this.search]);
    this.getphotos.recibirlista(this.lista)
    this.search='';
  }

}
