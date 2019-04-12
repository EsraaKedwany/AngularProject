import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { Product } from '../../entities/product.entity';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.sass']
})
export class SinglePageComponent implements OnInit {

  private product:Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      var id = params['id'];
      this.product=this.productService.find(id);
    });
      

  }

}
