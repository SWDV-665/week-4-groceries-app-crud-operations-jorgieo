import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from './../groceries-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService) {}

  async deleteItem(item, index){

      const toast = await this.toastController.create({
        message: 'Removed Item: '+item.name,
        duration: 1000
      });
      await toast.present();

      this.dataService.deleteItem(index);
  };

  async addItem() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enter item and quantity',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item'
        },
        {
          name: 'qty',
          type: 'number',
          placeholder: 'Quantity',
          min: 0,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (item) => {
            this.dataService.addItem(item);
          }
        }
      ]
    });

    await alert.present();
  };

  async editItem(item, index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit item or quantity',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item',
          value: item.name
        },
        {
          name: 'qty',
          type: 'number',
          placeholder: 'Quantity',
          min: 0,
          value: item.qty
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: (item) => {
            this.dataService.editItem(item, index);
          }
        }
      ]
    });

    await alert.present();
  };

  loadItems(){
    return this.dataService.getItems();
  }
}
