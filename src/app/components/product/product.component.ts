import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  PLATFORM_ID,
} from '@angular/core';
import { Product } from '../../services/products.interface';
import { CurrencyPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, SlicePipe],
  template: `<picture class="card">
    <img
      [src]="product()!.image"
      [alt]="product()?.description"
      style="width: 150px;"
    />
    <small class="card__category">{{ product()?.category }}</small>
    <p class="card__description">
      {{ product()?.description | slice : 0 : 50 }}...
    </p>
    <p class="card__price">{{ product()?.price | currency }}</p>
    <button (click)="buy()">comprar</button>
  </picture>`,
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  public product = input<Product>();

  buy() {
    console.log('buy', this.product());
  }
}
