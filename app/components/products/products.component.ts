import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  isActive=false;
  products:any;
  constructor(http : HttpClient) {

    http.get('../../assets/products.json')
    .subscribe(response=>{
      this.products=response;
    });
  }

  ngOnInit() {
  }

}
