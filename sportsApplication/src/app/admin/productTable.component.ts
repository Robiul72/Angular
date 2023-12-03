// // import { Component } from "@angular/core";

// // @Component({
// //     template: ` <h3 style="padding-top: 10px"> Product Table Placeholder </h3> `
// // })
// // export class ProductTableComponent { }

// import { Component, IterableDiffer, IterableDiffers } from "@angular/core";
// import { MatTableDataSource } from "@angular/material/table";
// import { Product } from "../model/product.model";
// import { ProductRepository } from "../model/product.repository";

// import { MatPaginator } from "@angular/material/paginator";

// @Component({
//     templateUrl: "productTable.component.html"
// })
// export class ProductTableComponent {
//     colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
//     dataSource = new MatTableDataSource<Product>(this.repository.getProducts());
//     differ: IterableDiffer<Product>;

//     @ViewChild 
//     (MatPaginator)
//     paginator?: MatPaginator

//     constructor(private repository: ProductRepository, differs: IterableDiffers) {
//         this.differ = differs.find(this.repository.getProducts()).create();
//     }
//     ngDoCheck() {
//         let changes = this.differ?.diff(this.repository.getProducts());
//         if (changes != null) {
//             this.dataSource.data = this.repository.getProducts();
//         }
//     }

//     ngAfterViewInit() {
//         if (this.paginator) {
//             this.dataSource.paginator = this.paginator;
//         }
//     }

//     deleteProduct(id: number) {
//         this.repository.deleteProduct(id);
//     }
// }


import { Component, IterableDiffer, IterableDiffers, ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { MatPaginator } from "@angular/material/paginator";

@Component({
    templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
    colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
    dataSource = new MatTableDataSource<Product>(this.repository.getProducts());
    differ: IterableDiffer<Product>;

    @ViewChild(MatPaginator) paginator?: MatPaginator;

    constructor(
        private repository: ProductRepository,
        private differs: IterableDiffers,
        private cdr: ChangeDetectorRef
    ) {
        this.differ = differs.find(this.repository.getProducts()).create();
    }

    ngAfterViewInit() {
        if (this.paginator) {
            this.dataSource.paginator = this.paginator;
        }
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
        // Trigger change detection manually after deleting a product
        this.cdr.detectChanges();
    }
}
