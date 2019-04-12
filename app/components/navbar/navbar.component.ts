import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item.entity';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private items: Item[] = [];
  private total: number = 0;

  constructor() { }

  ngOnInit() {

    let card = JSON.parse(localStorage.getItem('card'));
		for (var i = 0; i < card.length; i++) {
      let item = JSON.parse(card[i]);
      this.items.push({
				product: item.product,
				quantity: item.quantity
			});
    }
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
