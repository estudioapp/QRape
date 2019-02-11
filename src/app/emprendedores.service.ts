import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Blogemp } from './interfaces/blogemp';
import { Imgupload } from './interfaces/imgupload';
import * as firebase from 'firebase/app';
import 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class EmprendedoresService {
  
  constructor( 
    private fireBase: AngularFireDatabase,
    ) { }
    
    listBlog  : AngularFireList<Blogemp>;
    private basePath = '/uploads';


  emprenderList(){
    return this.listBlog = this.fireBase.list('emprender');
  }

  pushFileToStorage(fileUpload: Imgupload, progress: { percentage: number, estado?: string }, blog: Blogemp) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.$key}`).put(fileUpload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        if(progress.percentage === 100){
          progress.estado = "Carga completa";
        }else{
          progress.estado = null;
        }
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          blog.imagen = downloadURL;

          this.createItem(blog);
        });
      }
      );
  }

  pushFileToStorageUpdate(fileUpload: Imgupload, progress: { percentage: number, estado?: string }, blog: Blogemp) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.$key}`).put(fileUpload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        if(progress.percentage === 100){
          progress.estado = "Carga completa";
        }else{
          progress.estado = null;
        }
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          blog.imagen = downloadURL;

          this.updateItem(blog);
        });
      }
      );
  }
  updateItem(blog: Blogemp){
    this.listBlog.update(blog.$key,{
      imagen:blog.imagen,
      titulo1:blog.titulo1,
      titulo2:blog.titulo2,
      titulo3:blog.titulo3,
      titulo4:blog.titulo4,
      descripcion1:blog.descripcion1,
      descripcion2:blog.descripcion2,
      descripcion3:blog.descripcion3,
      descripcion4:blog.descripcion4,
      autor:blog.autor,
      fecha:blog.fecha,   
      categoria:blog.categoria
    })
  }
  createItem(blog : Blogemp){
    this.listBlog.push({
      imagen:blog.imagen,
      titulo1:blog.titulo1,
      titulo2:blog.titulo2,
      titulo3:blog.titulo3,
      titulo4:blog.titulo4,
      descripcion1:blog.descripcion1,
      descripcion2:blog.descripcion2,
      descripcion3:blog.descripcion3,
      descripcion4:blog.descripcion4,
      autor:blog.autor,
      fecha:blog.fecha,      
      categoria:blog.categoria
    })
  }

  borrar(key){
    this.listBlog.remove(key);
  }
}
