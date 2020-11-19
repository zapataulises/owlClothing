import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shoe } from './shoes-list/shoe';

@Injectable({
  providedIn: 'root',
})
export class ShoesCartService {
  private _wishList: shoe[] = [];
  wishList: BehaviorSubject<shoe[]> = new BehaviorSubject([]);

  constructor() {}

  addCart(shoes: shoe) {
    let item: shoe = this._wishList.find((v1) => v1.model == shoes.model);
    if (!item) {
      this._wishList.push(shoes);
    }
    console.log(this._wishList);
    this.wishList.next(this._wishList);
  }
}
