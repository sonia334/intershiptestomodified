import { Injectable, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { albuminterface } from '../interfaces/album';
import { LoremIpsum } from "lorem-ipsum";
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetphotosService {

    public  URL:string='https://picsum.photos/id/';
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
  
  public albums:albuminterface[]=[];
  public albumsfinal: any[]=[];
  public terminado:boolean=false
  


  constructor( private http: HttpClient) { }

  public traerfotos(){
    //Traer las 4000 imagenes 
    let observables: Observable<albuminterface[]>[] = [];
    for (let i = 0; i < 10; i++) {
      observables.push(this.http.get<albuminterface[]>(`https://picsum.photos/v2/list?page=${i}&limit=100`));
    }
    return forkJoin(observables);
  }

  private delay(ms = 500): Promise<unknown> {
    return new Promise(res => setTimeout(res, ms))
  };

}

