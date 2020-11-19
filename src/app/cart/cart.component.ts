import { Component, OnInit } from '@angular/core';
import { ShoesCartService } from '../shoes-cart.service';
import { shoe } from '../shoes-list/shoe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  wishList: shoe[];

  constructor(private cart: ShoesCartService) {
    cart.wishList.subscribe((cl) => (this.wishList = cl));
  }

  ngOnInit(): void {}
}
