import { variaveisGlobais } from '../variaveisGlobais';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(public http : HttpClient) { }

  


  adicionarUsuario(obj):any{
    let headers = { 
      headers: new HttpHeaders()
     .set('Content-Type', 'application/json; charset=utf-8')
    };
    return this.http.post(variaveisGlobais.baseUrl+"Usuario/Adicionar",obj,headers );
  }

  login(obj):any{
     let headers = { 
       headers: new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
    };
     return this.http.post(variaveisGlobais.baseUrl+"Usuario/Login",obj,headers );
  }
  
}
