import { Injectable } from "@angular/core";
import { Categoria } from "src/app/modelo/categoria.class";
import { DetalleReserva } from "src/app/modelo/detallereserva.class";
import { ProductoLocal} from "src/app/modelo/productolocal.class";
import { categoriaActiva } from '../../categoria/services/categoria.service';
import { Producto} from '../../modelo/producto.class';
import { usuarioactivo, localactivo, adminactivo } from '../../login/login-main/services/login.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn:'root'
})
export class ProductoService{
constructor(private route:Router, private http:HttpClient) {
    this.http.get<ProductoLocal[]>('http://127.0.0.1:8080/api/productolocal').toPromise().then((resp:ProductoLocal[])=>{this.productoslocal=resp;});
 }

public lista:Producto[]=[]
public lista1:ProductoLocal[]=[]
public lista2:Categoria[]=[]

productoslocal:ProductoLocal[]=[];
productocategoria:Producto[]=[]
detallesreserva:DetalleReserva[]=[]
async agregar(productolocal:ProductoLocal){
    const promesa =this.http.put<any>('http://127.0.0.1:8080/api/detallereservacarrito' + '/'+ localStorage.getItem("carrito")+'/'+productolocal.codProductoLocal.toString(),"").toPromise();
        return promesa.then(value=>{return true})
    this.detallesreserva= this.detallesreserva.filter(elemen => elemen.tieneReserva.estadoReserva==false && elemen.tieneReserva.tieneUsuario.dniUsuario==usuarioactivo[0].dniUsuario);
    let nuevodetallereserva = new DetalleReserva(0,1,productolocal,this.detallesreserva[0].tieneReserva)
    //const promesa = this.http.post<ProductoLocal>('http://localhost:8080/api/productolocal',nuevodetallereserva).toPromise();
        //return promesa.then(value =>{return true});
       
}

usuarioactivo=localStorage.getItem("usuarioactivo")
localactivo=localStorage.getItem("usuariolocal")
adminactivo=localStorage.getItem("adminactivo")
categoria=categoriaActiva
login(){
    console.log(usuarioactivo)
    this.route.navigate(['login'])
}



filtrar(){
    if(localStorage.getItem("categoriaactiva")==""){
        
        return this.productoslocal
    }
    else{
        this.http.get<ProductoLocal[]>('http://127.0.0.1:8080/api/productolocalcategoria/'+localStorage.getItem("categoriaactiva")).toPromise().then((resp:ProductoLocal[])=>{this.productoslocal=resp;});      
        return this.productoslocal
    }
    //lista de productos locales filtaradas por categoriaasasasasasas
}


}

const productocategoria:Categoria[]=[]
