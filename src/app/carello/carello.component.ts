import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnInit {
items: number = 0;
nameItem: string;
listItem = new Map<string, number>();
cont: Array<number> = [];
keys: any;
  constructor() { }

  ngOnInit() {
  }

 addItem(){
   if(this.nameItem !== undefined && this.nameItem !==""){
     if(this.isItemPresent(this.nameItem)){
       this.listItem.set(this.nameItem,this.listItem.get(this.nameItem)+1);
     }else{
       this.listItem.set(this.nameItem,1);
     } 
   }
   //console.log(this.listItem.get(this.nameItem));
   this.keys = Array.from(this.listItem.keys());
   this.getItems();
   this.nameItem = "";
  
 }

 removeItem(){
   console.log("item remove");
   for(let key of this.keys){
     this.listItem.delete(key);
   }
   this.keys = [];
   this.items = null;
 }

 getItems(){
   this.items = 0;
   this.cont = [];
   let i = 0;
   for(let key of this.keys){
     this.items += this.listItem.get(key);
     this.cont[i++] = this.listItem.get(key);
   }
 }

 isItemPresent(item:string){
   item.toLowerCase();
   if(this.listItem.get(item) == null)
    return false;
   else return true;
 }
}
