import { Local, locales } from './local.class';
import { Producto, productos } from './producto.class';

export class ProductoLocal{
    constructor(
        public codProductoLocal:number,
        public precioProductoLocal:number,
        public tieneLocal:Local,
        public tieneProducto:Producto
    ){}
    get getcodProductoLocal(){
        return this.codProductoLocal
    }
    get getprecioproductolocal():number{
        return this.precioProductoLocal
    }
    get getlocalProductoLocal(){
        return this.tieneLocal
    }
    get getproducto(){
        return this.tieneProducto
    }
}
