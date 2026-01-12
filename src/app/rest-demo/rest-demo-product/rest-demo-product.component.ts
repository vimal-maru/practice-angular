import { Component, inject } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-rest-demo-product',
  imports: [FormsModule, FooterComponent],
  templateUrl: './rest-demo-product.component.html',
  styleUrl: './rest-demo-product.component.css',
})
export class RestDemoProductComponent {
  productList: any;

  isProductLoad: boolean = false;

  userserviceService = inject(UserserviceService);

  getAllProduct() {
    this.isProductLoad = true;
    this.userserviceService.getProductList().subscribe((data: any) => {
      this.productList = data.products;
      this.isProductLoad = false;
    });
  }

  hideAllProduct() {
    this.productList = [];
  }
}
