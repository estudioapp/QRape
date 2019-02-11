import { Component, OnInit } from '@angular/core';
import { Imgupload } from 'src/app/interfaces/imgupload';
import { Blogemp } from 'src/app/interfaces/blogemp';
import { EmprendedoresService } from 'src/app/emprendedores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {


  constructor(
    private emprendedores : EmprendedoresService,
    private activatedRoute : ActivatedRoute,
    private route : Router,

   ) { 
     this.newBlog = {};
   }
 
   selectedFiles: FileList;
   progress: { percentage: number, estado?: string } = { percentage: 0, estado: null };
   currentFileUpload: Imgupload;
 
   newBlog : Blogemp;
 
   ngOnInit() {
     this.emprendedores.emprenderList()
     .snapshotChanges()
     .subscribe(data => {
       this.newBlog = {};
       data.forEach(element => {
         let x = element.payload.toJSON();
         x["$key"] = element.key;
         if(x["$key"] === this.activatedRoute.snapshot.paramMap.get("key")){
           this.newBlog = x;
         }
       });
     });
   }
 
 
   selectFile(event) {
     let label = document.getElementById("labelFile-t");
     label.style.background = "grey";
     event.target.disabled = true; 
 
     this.selectedFiles = event.target.files;
   }
 
   upload(){
    if(this.selectedFiles === undefined || this.selectedFiles === null){
    this.emprendedores.updateItem(this.newBlog); 
    this.route.navigateByUrl("/emprender/listadoitem");

    }else{
     const file = this.selectedFiles.item(0);
       if(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg' ){
         if(file.size < 4000000){
           console.log("hola3");          
           const file = this.selectedFiles.item(0);
           this.selectedFiles = undefined;
           this.currentFileUpload = new Imgupload(file);
           this.currentFileUpload.$key = Math.random();
           this.emprendedores.pushFileToStorageUpdate(this.currentFileUpload, this.progress, this.newBlog);
           this.route.navigateByUrl("/emprender/listadoitem");
         
          }else{
           console.log("error1");
         }
       }else{
         console.log("error2");
 
       }
     }
  }
  doEvent(value){
    this.newBlog.categoria = value;
  }
}
