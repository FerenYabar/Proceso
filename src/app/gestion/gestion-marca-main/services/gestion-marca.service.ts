import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Marca, marcas } from '../../../modelo/marca.class';
import { Observable, Subscription } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GestionMarcaservice{

    private baseUrl = "http://127.0.0.1:8080/api/marca"

    constructor(private http: HttpClient){}

    public listar: Marca[] = []

    listarMarca(){
        this.http.get<Marca[]>(this.baseUrl)
        .subscribe(resp => {
            this.listar = resp
        })
    }


    agregarmarca(nombreMarca:String){
        const nuevoMarca:Marca=new Marca(0,nombreMarca,[])
        marcas.push(nuevoMarca);
    }

    async agregarmarcaa(marca: Marca){
        const promesa = this.http.post<any>(this.baseUrl,marca).toPromise();
        return promesa.then(value =>{return true});
    }

    async eliminarmarcaa(id: number){
        const promesa = this.http.delete(this.baseUrl+'/'+id).toPromise();
        return promesa.then(value => {return true});
    }

    async atualizarmarcaa(id: number, marca: Marca){
        const promesa = this.http.put<any>(this.baseUrl+'/'+id, marca).toPromise();
        return promesa.then(value => {return true})
    }

   

    eliminarmarca(eliminacion:number[]){
        eliminacion.sort(function(a, b){return b - a});
        for(let i:number=0;eliminacion.length>i;i++){
            marcas.splice(eliminacion[i],1)    
          }
    }

}
