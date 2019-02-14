import { Injectable } from '@angular/core';
// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  constructor( private fireBase: AngularFireDatabase ) { }

  listPacks: AngularFireList<any>;

  returnListPacks(){
    return this.listPacks = this.fireBase.list("packs");
  }

}
