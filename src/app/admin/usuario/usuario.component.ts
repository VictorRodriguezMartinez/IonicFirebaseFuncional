import { Component, OnInit, Input } from '@angular/core';
import { MiServicioService } from '../../mi-servicio.service';
import { Usuario, USUARIOS } from '../../mock-usuarios';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {


  @Input() opcionUsuario: string;
  // terminoBusqueda: boolean;
  usuarios = USUARIOS;
  usuariosFiltrados: Usuario[];
  items;

  constructor(
    public userService: MiServicioService,
    private db: AngularFirestore
  ) {
    this.db.firestore.collection('items').doc('8VXmE8697cYhJ1wBSenT').onSnapshot(data => {
      this.items = data.data();
    });
    
    console.log(this.db.collection('items').valueChanges());
   }

  ngOnInit() {
  }



  buscarUsuario (termino: string): Usuario[] {
    console.log(termino);
    // this.terminoBusqueda = true;

    termino = termino.toLowerCase();
    this.usuariosFiltrados = new Array<Usuario> ();

    for ( let usuario of this.usuarios) {
      let nombre = usuario.nombre.toLowerCase();

      if ( nombre.indexOf( termino ) >= 0 ) {
        this.usuariosFiltrados.push( usuario );
      }
    }

    return this.usuariosFiltrados;
  }

  accionUsuario() {
    switch (this.opcionUsuario) {
      case 'usuarioVer':
      // console.log(this.terminoBusqueda);
      console.log(this.usuarios);
      // return this.usuarios;
      break;

      case 'usuarioAnadir':
        console.log('response');
      break;

      case 'usuarioAnadirTrabajo':

      break;

      case 'usuarioModificar':

      break;

      case 'usuarioBorrar':

      break;

    }
  }

}
