import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/products.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;
  
  constructor(
    private activatedRoute: ActivatedRoute,
	private productService: ProductService
	) 
	{ }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('card') == null) {
					let card: any = [];
					card.push(JSON.stringify(item));
					localStorage.setItem('card', JSON.stringify(card));
				}
				else {
					let card: any = JSON.parse(localStorage.getItem('card'));
					let index: number = -1;
					for (var i = 0; i < card.length; i++) {
						let item: Item = JSON.parse(card[i]);
						if (item.product.ProductId == id) {
							index = i;
							break;
					}
					}
					if (index == -1) {
						card.push(JSON.stringify(item));
						localStorage.setItem('card', JSON.stringify(card));
					} else {
						let item: Item = JSON.parse(card[index]);
						item.quantity += 1;
						card[index] = JSON.stringify(item);
						localStorage.setItem("card", JSON.stringify(card));
					}
				}
				this.loadcard();
			} else {
				this.loadcard();
			}
		});
  }


  loadcard(): void {
		this.total = 0;
		this.items = [];
		let card = JSON.parse(localStorage.getItem('card'));
		for (var i = 0; i < card.length; i++) {
			let item = JSON.parse(card[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.Price * item.quantity;
		}
	}

	remove(id: string): void {
		let card: any = JSON.parse(localStorage.getItem('card'));
		let index: number = -1;
		for (var i = 0; i < card.length; i++) {
			let item: Item = JSON.parse(card[i]);
			if (item.product.ProductId == id) {
				card.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("card", JSON.stringify(card));
		this.loadcard();
	}

}
