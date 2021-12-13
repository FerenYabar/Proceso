export class Usuario{
    constructor(
        public codUsuario:number,
        public dniUsuario:String,
        public nombreUsuario:String,
        public apellidoUsuario:String,
        public usuario:String,
        public contrasena:String,
        public celular:String,
        public correo:String,
        public direccion:String,
    ){}

    get getcodUsuario(){
        return this.codUsuario
    }

    get getnombreUsuario(){
        return this.nombreUsuario
    }
    get getdniUsuario(){
        return this.dniUsuario
    }
    get getApellidoUsuario(){
        return this.apellidoUsuario
    }
    get getusuariousuario(){
        return this.usuario
    }
    get getconstraseñaUsuario(){
        return this.contrasena
    }
    get getcelularUsuario(){
        return this.celular
    }
    get getCorreoUsuario(){
        return this.correo
    }
    get getDireccionUsuario(){
        return this.direccion
    }
    

        
}
const usuario01=new Usuario(0,"12457896","Josept","Ccoyore","jose123","123","954123678","jose@hotmail.com","Urb. Magisterio segunda etapa")
const usuario02=new Usuario(1,"85742631","Pedro","Picapiedra","pedro123","321","978456632","picapiedra@hotmail.com","Urb. La Florida M-23")
const usuario03=new Usuario(2,"84752633","Pabel","Peña","pabelita123","32111","978484859","pabelita@hotmail.com","Urb. entel Peru M-22")
const usuario04=new Usuario(3,"85742631","Nayely","Picapiedra","pedro123","321","978456632","picapiedra@hotmail.com","Urb. La Florida M-23")
const usuario05=new Usuario(4,"84752633","Jose","Peña","pabelita123","32111","978484859","pabelita@hotmail.com","Urb. entel Peru M-22")
export const usuarios:Usuario[]=[
    usuario01,usuario02,usuario03,usuario04,usuario05
]