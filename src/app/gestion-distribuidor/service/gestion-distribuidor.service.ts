import { Injectable } from '@angular/core';
import { ProductoLocal } from '../../modelo/productolocal.class';
import { Producto } from '../../modelo/producto.class';
import { localactivo } from '../../login/login-main/services/login.service';
import {HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class GestionDistribuidorService {

  constructor(private http:HttpClient) {
    this.http.get<ProductoLocal>('http://127.0.0.1:8080/api/productolocal').subscribe((resp:any)=>{console.log(resp);this.productoslocal=resp;});
   }
  
  public productoslocal:ProductoLocal[] = []

  get getproductofaltantes(){
    const productoslocalfaltante:Producto[]=[]
    const productosenlocal:ProductoLocal[]=this.productoslocal.filter(element=>element.tieneLocal==localactivo[0])
    const productosfaltantes:Producto[]=[]
    let result:Producto[]=[]
    productosenlocal.forEach(element => {
      productosfaltantes.push(element.tieneProducto)
    });
    result = productoslocalfaltante.filter(el => !productosfaltantes.includes(el))
    return result
  }
  


  async agregar(producto:Producto,precio:number){
    let productolocal:ProductoLocal = new ProductoLocal(0,precio,localactivo[0],producto)
    const promesa= this.http.post<any>('http://127.0.0.1:8080/api/productolocal',productolocal).toPromise();
    return promesa.then(value=>{return true});
  }
  
}
