import { Component, OnInit } from '@angular/core';
import { GetphotosService } from '../../services/getphotos.service';
import { albuminterface } from '../../interfaces/album';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-resultadobusqueda',
  templateUrl: './resultadobusqueda.component.html',
  styleUrls: ['./resultadobusqueda.component.css']
})
export class ResultadobusquedaComponent implements OnInit {
  public lista:albuminterface[]=[];
  public listabuscada:albuminterface[]=[]
  public search:string='';

  constructor(private getphotos: GetphotosService, private rutaactiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.lista= this.getphotos.mandarlista();
    console.log(this.lista);
    this.rutaactiva.params.subscribe(
      (params: Params) => {
       this.search=params.texto;
       this.listabuscada=this.lista.filter((item)=>{
         item.id.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()) ||
         item.author.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()) ||
         item.text.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())
       })
       console.log(this.listabuscada)
      })
  
   
  }

}
