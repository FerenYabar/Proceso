import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { usuarioactivo, localactivo, adminactivo } from '../../login/login-main/services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(
  ) { 

  }
  localactivo=localStorage.getItem("localactivo")
  usuarioactivo=localStorage.getItem("usuarioactivo")
  adminactivo=localStorage.getItem("adminactivo")

  ngOnInit(): void {
    localStorage.setItem("categoriaactiva","")
  }
  borrar(){
    localStorage.setItem("localactivo","")
  localStorage.setItem("usuarioactivo","")
  localStorage.setItem("adminactivo","")

  }

 
  
  

}

