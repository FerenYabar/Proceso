import { Injectable } from '@angular/core';
import { usuarioactivo, localactivo } from '../../login/login-main/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor() { }

  
  usuario=usuarioactivo;
  local=localactivo;

}
