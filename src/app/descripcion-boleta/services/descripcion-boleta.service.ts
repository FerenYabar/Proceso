import { HttpClient } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable, OnInit } from '@angular/core';
import { DetalleReserva } from 'src/app/modelo/detallereserva.class';
import { reservaactiva } from '../../entrega-pedidos/servicios.service';
import { Reserva } from '../../modelo/reserva.class';

@Injectable({
  providedIn: 'root'
})
export class descripcionboletaService{

  constructor(private http:HttpClient) {
    this.http.get<DetalleReserva[]>('http://localhost:8080/api/detallereservaporReserva/'+localStorage.getItem("reservaactiva")).toPromise().then((resp:DetalleReserva[])=>{this.detallereserva=resp;});
  }

  detallereserva: DetalleReserva[]=[];
  get detallereservalista(){
    return this.detallereserva;
  }

   total(detallereserva:DetalleReserva[]):number{
     let cant:number=0
     detallereserva.forEach(element => {
     cant = cant+(element.tieneProductoLocal.precioProductoLocal*element.cantidadDetalleReserva) 
     }); 
     console.log(this.detallereserva)
     console.log(reservaactiva[0])
     return cant
}  
}