import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Items } from '../models/item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Items>;
  items: Observable<Items[]>;
  itemDoc: AngularFirestoreDocument<Items>;

  constructor(public afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();

    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Items;
        data.id = a.payload.doc.id;
        console.log(data.id);
        return data;
      })
    })
    )
  }


  getItems() {
    return this.items;
  }

  addItem(item: Items){
    this.itemsCollection.add(item);
  }

  updateItem(item: Items){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }

  deleteItem(item: Items){
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }
}


