import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsarioLogin';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  private router: Router


  constructor() {}
  private auth: AuthService

  ngOnInit()  {
    window.scroll(0,0)
  }

  entrar(){

    this.auth.entrar(this.usuarioLogin).subscribe((resp:UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.foto = this.usuarioLogin.foto,
      environment.id = this.usuarioLogin.id
      environment.nome = this.usuarioLogin.nome
      environment.token = this.usuarioLogin.token




      this.router.navigate(["/inicio"])
    }, erro=>{
      if(erro.status==500 ) {
        alert('usuario ou senha incorretos!')
      }
    })

  }

}
