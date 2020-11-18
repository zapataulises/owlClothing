import { Component, OnInit } from '@angular/core';
import { shoe } from './shoe';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss'],
})
export class ShoesListComponent implements OnInit {
  shoes: shoe[] = [
    {
      brand: 'Nike',
      model: "Air Max 90'",
      price: 120,
      image: 'assets/img/airm90.png',
      promotion: false,
    },
    {
      brand: 'Fila',
      model: 'Venom',
      price: 75,
      image: 'assets/img/filavenom.jpg',
      promotion: true,
    },
    {
      brand: 'Adidas',
      model: 'EQT',
      price: 90,
      image: 'assets/img/adidas.png',
      promotion: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
