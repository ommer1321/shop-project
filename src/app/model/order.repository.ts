import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestService } from "./rest.service";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class OrderRepository{

    private orders :Order[] = [];


    constructor(private resService:RestService){}

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrders(order:Order):Observable<Order>{

        return this.resService.saveOrder(order)

    }
    

}