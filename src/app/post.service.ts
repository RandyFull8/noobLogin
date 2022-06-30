import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { Post } from './post.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  getPosts(){
    return this.angularFirestore
    .collection("post")
    .snapshotChanges()
  }
  getsPostById(id){
    return this.angularFirestore
    .collection("post")
    .doc(id)
    .valueChanges()
  }
 
  createPost(post:Post){
    return new Promise<any>((resolve, reject)=>{
      this.angularFirestore
      .collection("post")
      .add(post)
      .then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }
  updatePost(post: Post,id){
    return this.angularFirestore
    .collection("post")
    .doc(id)
    .update({
    area:post.area,
    autorizador:post.autorizador,
    cantidad:post.cantidad,
    descripcion:post.descripcion,
    fecha:post.fecha,
    fechaRegreso:post.fechaRegreso,
    motivo:post.motivo,
    observaciones: post.observaciones,
    para:post.para,
    status:post.status,
    unidadMedida: post.unidadMedida
    });
  }
  deletePost(post: Post,id){
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete
  }


}
