
// import { Component } from "@angular/core";
// @Component({
//     template: `<div><h3 class="bg-info p-1 text-white">Cart Detail Component</h3></div>`
// })
// export class CartDetailComponent { }


import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { ConnectionService } from "../model/connection.service";

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
    // constructor(public cart: Cart) { }

    public connected: boolean = true;
    constructor(public cart: Cart, private connection: ConnectionService) {
        this.connected = this.connection.connected;
        connection.Changes.subscribe((state) => this.connected = state);
    }
}