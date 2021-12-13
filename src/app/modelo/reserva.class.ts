import { Local, locales } from './local.class';
import { Usuario, usuarios } from "./usuario.class";

export class Reserva{
    constructor(
        public codReserva:String,
        public fechaReserva:Date,
        public estadoReserva:boolean,
        public usuarioReserva:Usuario,
        public localReserva:Local
    ){

    }
    get getfechaReserva(){
        return this.fechaReserva
    }
    get getusuarioreserva(){
        return this.usuarioReserva
    }
    get getestadoreserva(){
        return this.estadoReserva
    }
    get getcodReserva():String{
        return this.codReserva
    }
    get getlocalReserva(){
        return this.localReserva
    }
    

}
const date =new Date(2012,12,10)
const reserva01=new Reserva("R0001",date,true,usuarios[0],locales[0])
const reserva02=new Reserva("R0002",date,false,usuarios[1],locales[1])
const reserva03=new Reserva("R0003",date,false,usuarios[2],locales[2])
const reserva04=new Reserva("R0004",date,false,usuarios[3],locales[3])
const reserva05=new Reserva("R0005",date,false,usuarios[4],locales[0])
export const reservas:Reserva[]=[
    reserva01,reserva02,reserva03,reserva04,reserva05
]