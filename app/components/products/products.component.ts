import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  // isActive=false;
  products:any;
  wishCount:number;
  cardCount:number;
  wish:Array<string>=[];
  card:Array<string>=[];
  constructor(http : HttpClient) {

    http.get('../../assets/products.json')
    .subscribe(response=>{
      this.products=response;
    });
  }

  ngOnInit() {
    this.wishCount=0;
    this.cardCount=0;
  }

}
