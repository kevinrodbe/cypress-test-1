import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Items } from '../../models/item';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  item: Items={
    title: '',
    description: ''
  }
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.item.title != '' && this.item.description != ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }else{
      alert("Please fill both fields!");
    }
  }

}
