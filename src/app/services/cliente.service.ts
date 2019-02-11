import { Injectable } from '@angular/core';

// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cliente } from '../interfaces/cliente';
import { WebCliente } from '../interfaces/web-cliente';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor( 
    private fireBase: AngularFireDatabase,
    private http : HttpClient
  ) { }

  listClient: AngularFireList<Cliente>;
  listBlog  : AngularFireList<Blog>;


  clientsWithSnap(){
    return this.listClient = this.fireBase.list('cliente');
  }
  
  blogList(){
    return this.listBlog = this.fireBase.list('blog');
  }
  
  sendEmail(titulo, mensaje, email){
    return this.http.get("https://changofree.com/assets/php/send-mail.php?titulo="+titulo+"&mensaje="+mensaje+"&email="+email);
  }

  getListClients() {
    
    let auxList : Cliente[];
    auxList = [];
    
    this.listClient = this.fireBase.list('cliente');
    
    this.listClient.snapshotChanges()
    .subscribe(item => {
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key'] = element.key;
        auxList.push(x as Cliente);
      });
    });
    
    return auxList ;
  }

  /**
   * 
   * @param clientObject 
   * 
   */
    insertClient(clientObject: Cliente) {
    let keyAux = clientObject.marca.replace(/ /g, "-");
    this.fireBase.list('cliente').set(keyAux,{
      name: clientObject.name,
      email: clientObject.email,
      password: clientObject.password,
      marca: clientObject.marca,
      creacion:clientObject.creacion,
      hasta:clientObject.hasta,
      online: true,
      web: {
        carrito:null,
        anuncios:null,
        product:null,
        plataforma:"stand",
        whatsapp:"",
        instagram:"",
        facebook:"",
        view: 0
      }
    })
  }

  updateClient(clientObject: WebCliente, data : WebCliente, $key : string) {
    console.log(clientObject)
    this.listClient.update($key, {
      web: {
        whatsapp: clientObject.whatsapp,
        instagram: clientObject.instagram,
        facebook: clientObject.facebook,
        plataforma: data.plataforma,
        view: 0,
      }
    });
  }

  storeBlog(obj : Blog){
    this.listBlog.push({
      title1:obj.title1,
      title2:obj.title2,
      title3:obj.title3,
      title4:obj.title4,
      descripcion1:obj.descripcion1,
      descripcion2:obj.descripcion2,
      descripcion3:obj.descripcion3,
      descripcion4:obj.descripcion4
    })
  }

  SearchRegistForEmail(email: string, json) {
    return of(json.find((client => client.email === email)));
  }
}
