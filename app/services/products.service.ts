import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
      this.products = [
        {
          "ProductId": "HT-1000",
          "Description": "Notebook Basic 15 with 2,80 GHz quad core, 15\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
          "Name": "Notebook Basic 15",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1000.jpg",
          "Status": "Available",
          "Quantity": 10,
          "Price": 956,
      },
      {
          "ProductId": "HT-1001",
          "Description": "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro",
          "Name": "Notebook Basic 17",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
          "Status": "Available",
          "Quantity": 20,
          "Price": 1249,
      },
      {
          "ProductId": "HT-1002",
          "Description": "Notebook Basic 18 with 2,80 GHz quad core, 18\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
          "Name": "Notebook Basic 18",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1002.jpg",
          "Status": "Available",
          "Quantity": 10,
          "Price": 1570,
      },
      {
          "ProductId": "HT-1003",
          "Description": "Notebook Basic 19 with 2,80 GHz quad core, 19\" LCD, 8 GB DDR3 RAM, 1000 GB Hard Disc, Windows 8 Pro",
          "Name": "Notebook Basic 19",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1003.jpg",
          "Status": "Available",
          "Quantity": 15,
          "Price": 1650,
      },
      {
          "ProductId": "HT-1007",
          "Description": "Digital Organizer with State-of-the-Art Storage Encryption",
          "Name": "ITelO Vault",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1007.jpg",
          "Status": "Available",
          "Quantity": 15,
          "Price": 299,
      },
      {
          "ProductId": "HT-1010",
          "Description": "Notebook Professional 15 with 2,80 GHz quad core, 15\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
          "Name": "Notebook Professional 15",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1010.jpg",
          "Status": "Available",
          "Quantity": 16,
          "Price": 1999,
      },
      {
          "ProductId": "HT-1011",
          "Description": "Notebook Professional 17 with 2,80 GHz quad core, 17\" Multitouch LCD, 8 GB DDR3 RAM, 500 GB SSD - DVD-Writer (DVD-R/+R/-RW/-RAM),Windows 8 Pro",
          "Name": "Notebook Professional 17",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1011.jpg",
          "Status": "Available",
          "Quantity": 17,
          "Price": 2299,
      },
      {
          "ProductId": "HT-1020",
          "Description": "Digital Organizer with State-of-the-Art Encryption for Storage and Network Communications",
          "Name": "ITelO Vault Net",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1020.jpg",
          "Status": "Available",
          "Quantity": 14,
          "Price": 459,
      },
      {
          "ProductId": "HT-1021",
          "Description": "Digital Organizer with State-of-the-Art Encryption for Storage and Secure Stellite Link",
          "Name": "ITelO Vault SAT",
          "ProductPicUrl": "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1021.jpg",
          "Status": "Available",
          "Quantity": 50,
          "Price": 149,
      }
      ];
      
    }


    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].ProductId == id) {
                return i;
            }
        }
        return -1;
    }

}