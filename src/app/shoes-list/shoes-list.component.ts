import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss'],
})
export class ShoesListComponent implements OnInit {
  shoes = [
    {
      brand: 'Nike',
      model: "Air Max 90'",
      price: 120,
      image: 'assets/img/airm90.png',
    },
    {
      brand: 'Adidas',
      model: 'EQT',
      price: 115,
      image: 'assets/img/adidas.png',
    },
    {
      brand: 'Fila',
      model: 'Venom',
      price: 90,
      image: 'assets/img/filavenom.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
