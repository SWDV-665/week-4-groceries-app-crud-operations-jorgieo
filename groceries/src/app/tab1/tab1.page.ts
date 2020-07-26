import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './../groceries-service.service';
import { InputDialogService } from './../input-dialog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogService) {}

  async deleteItem(item, index){

      const toast = await this.toastController.create({
        message: 'Removed Item: '+item.name,
        duration: 1000
      });
      await toast.present();

      this.dataService.deleteItem(index);
  };

  addItem(){
    this.inputDialogService.showPrompt();
  }

  editItem(item, index){
    this.inputDialogService.showPrompt(item, index);
  }


  loadItems(){
    return this.dataService.getItems();
  }
}
