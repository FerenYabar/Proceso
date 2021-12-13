import { productos } from './producto.class';
import { ProductoLocal } from './productolocal.class';
import { Reserva, reservas } from './reserva.class';

export class DetalleReserva{
    constructor(
        private codDetalleReserva:number,
        private cantidadDetalleReserva:number,
        private productolocalDetalleReserva:ProductoLocal,
        private reservaDetalleReserva:Reserva
    ){

    }
    get getcodDetalleReserva(){
        return this.codDetalleReserva
    }

    get getReservas(){
        return this.reservaDetalleReserva
    }
    get getproductoDetalleReserva(){
        return this.productolocalDetalleReserva
    }
    get getcantiaddDEtalleReserva(){
        return this.cantidadDetalleReserva
    }

}





