import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
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
  id: number = 2;

  constructor(public dialog: MatDialog, public itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems().subscribe((list:Item[]) => {
      this.itemList = list;
    }, (err) => {
        this.error = err.message;
    })
  }

  deletItem(id: number | undefined): void {
    this.itemService.deleteItem(id!).subscribe(() => {
      window.location.reload()
    }, (err) => {
        this.error = err.message;
    })
  }

  async openDialog() {
    const dialogRef = this.dialog.open( FormComponent , {
      width: '400px',
      height: '400px',
      data: { idToBeEdit: this.id } 
    });

  dialogRef.afterClosed().subscribe(() => {
    console.log('The dialog was closed.')
  })
  }

  ngOnInit(): void {
      this.getItems();
  }
}
