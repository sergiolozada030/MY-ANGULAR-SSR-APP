import { afterRender, Component, inject, PLATFORM_ID } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductComponent, AsyncPipe],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public products$ = inject(ProductsService).execute();
  private platformId = inject(PLATFORM_ID);

  constructor() {
    afterRender(() => {
      localStorage.setItem('Name', 'Carlos');
    });
  }

  ngOnInit() {
    console.log('The current platform is: ', this.platformId);
    /*     if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('Name', 'Sergio');
    } */
  }
}
