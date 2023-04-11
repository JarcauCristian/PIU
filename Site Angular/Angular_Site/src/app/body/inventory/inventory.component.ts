import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit{
  error?: string;
  itemList!: Item[];
  items : string[] = [
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria",
    "John",
    "Maria"
  ]

  constructor(public dialog: MatDialog, public itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems().subscribe((list:Item[]) => {
      this.itemList = list;
    }, (err) => {
        this.error = err.message;
    })
  }

  async openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '250px',
      data: {item : this.items}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("New Item added!")
    });
    
  }
  ngOnInit(): void {}
}
