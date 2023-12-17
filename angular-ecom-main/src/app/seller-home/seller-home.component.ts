import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList:  product[]=[];
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit=faEdit;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    // this.list();
    this.loadProductList();
  }

  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        // this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  // list() {
  //   this.product.productList().subscribe((result) => {
  //     if (result) {
  //       this.productList = result;
  //     }
  //   });
  // }



  loadProductList(): void {
    this.product.productList().subscribe(
      (result) => {
        console.warn(result);
        this.productList = Array.isArray(result) ? result : [result];
      },
      (error) => {
        console.error('Error fetching product list:', error);
      }
    );
  }
}
