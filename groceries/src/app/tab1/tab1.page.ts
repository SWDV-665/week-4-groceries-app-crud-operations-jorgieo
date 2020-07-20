import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items = [
    {
      name:"Banana",
      qty: 6
    },
    {
      name:"Apple",
      qty: 4
    },    
    {
      name:"Milk",
      qty: 1
    },    
    {
      name:"Bread",
      qty: 1
    },    
    {
      name:"Eggs",
      qty: 18
    }
  ];

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async deleteItem(item, index){

      const toast = await this.toastController.create({
        message: 'Removed Item: '+item.name,
        duration: 2000
      });
      await toast.present();

      this.items.splice(index, 1);
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
            this.items.push(item)
          }
        }
      ]
    });

    await alert.present();
  }
}
