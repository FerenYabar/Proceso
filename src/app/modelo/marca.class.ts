import { productos, Producto } from './producto.class';
export class Marca{
    constructor(
        public codMarca:number,
        public nombreMarca:String,
        private productos: Producto[]
    ){}

    
    public get getnombremarca() : String {
        console.log(this.nombreMarca)
        return this.nombreMarca
    }
    public get getCodMarca() : number {
        console.log("this.codMarca")
        return this.codMarca
    }

    public set setnombremarca(nombremarca: String){
        this.nombreMarca = nombremarca;
    }

    public set setcodmarca(codmarca: number){
        this.codMarca = codmarca;
    }
    
}

export const marcas: Marca[] = [];


