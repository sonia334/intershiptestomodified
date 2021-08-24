import { Injectable, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__ } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { albuminterface } from '../interfaces/album';

import { Observable, forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetphotosService {

    public  URL:string='https://picsum.photos/id/';
    
  
  public album:albuminterface[]=[];
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

  
  public recibirlista(lista:albuminterface[]){
    this.album=lista;
    console.log("he llegado al servicio")
    //console.log(this.album)
  }
  public mandarlista(){
    return this.album
  }
  
}

