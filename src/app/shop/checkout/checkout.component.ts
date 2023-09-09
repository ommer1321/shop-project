import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  
  frm: FormGroup;
  orderSent:boolean = false
  
  constructor(
    public order: Order,
    public orderRepository: OrderRepository,
    private formBuilder: FormBuilder
  ) {
    this.frm = formBuilder.group({

      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],

    });
  }

  get name(){

    return this.frm.get('name')

  }

  submit_click(){
    if(this.frm.valid){
   
      this.order.name = this.frm.get('name').value
      this.order.address = this.frm.get('address').value
      this.order.city = this.frm.get('city').value
      this.order.phone = this.frm.get('phone').value
      this.order.email = this.frm.get('email').value

      this.orderRepository.saveOrders(this.order)
      .subscribe(order=>{
        
        this.order.clearOrder();
        this.orderSent = true;
        

      })


    }else{
      console.log('form not valid');
      
    }


  }


}
