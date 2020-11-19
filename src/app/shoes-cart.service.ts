import { Injectable } from '@angular/core';
import { shoe } from './shoes-list/shoe';

@Injectable({
  providedIn: 'root',
})
export class ShoesCartService {
  wishList: shoe[] = [];

  constructor() {}

  addCart(shoes: shoe) {
    let item: shoe = this.wishList.find((v1) => v1.model == shoes.model);
    if (!item) {
      this.wishList.push(shoes);
    }
    console.log(this.wishList);
  }
}
