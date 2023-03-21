import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() numb: number = 1;
 public keys: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
