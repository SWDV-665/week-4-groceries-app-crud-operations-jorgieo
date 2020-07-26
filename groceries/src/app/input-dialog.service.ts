import { Injectable } from '@angular/core';
import { GroceriesServiceService } from './groceries-service.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public dataService: GroceriesServiceService, public alertController: AlertController) { }

  async showPrompt(item?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: item ? 'Edit item or quantity' : 'Enter item and quantity ',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item',
          value: item ? item.name : null
        },
        {
          name: 'qty',
          type: 'number',
          placeholder: 'Quantity',
          min: 0,
          value: item ? item.qty : null
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
          text: item? 'Save' : 'Add',
          handler: (item) => {
            if (index !== undefined){
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });

    await alert.present();
  };

}
