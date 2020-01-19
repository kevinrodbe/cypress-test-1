import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Items } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemsArr: Items[];
  editState: boolean=false;
  itemToEdit: Items;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    // console.log('ng oninit ran');
    this.itemService.getItems().subscribe(dataItems => {
      console.log(dataItems);
      this.itemsArr = dataItems;
    })
  }

  editItem(event, item: Items){
    this.editState = true;
    this.itemToEdit = item;
    
  }

  updateItem(item: Items){
    this.itemService.updateItem(item);
    this.clearState();
  }

  deleteItem(event, item: Items){
    this.clearState();
    this.itemService.deleteItem(item);
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null;
  }

}
