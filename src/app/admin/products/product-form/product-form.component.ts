import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.reporsitory';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
})
export class ProductFormComponent {
  
  editing:Boolean = false;
  product:Product = new Product;
  product_id:number

  constructor(
    private activatedRoute:ActivatedRoute,
    public productRepository:ProductRepository,
    private formBuilder: FormBuilder,
    private router:Router,

    ){

    this.editing = activatedRoute.snapshot.params['mode'] == 'edit';

    if(this.editing){
      
      //+ işareti stringi numbere'a ceviriyor 
      this.product = productRepository.getProduct(+activatedRoute.snapshot.paramMap.get('id'));


    }
    
  }

  submit(frm : NgForm){
    console.log(this.product);
    

    this.productRepository.saveProduct(this.product);

    return this.router.navigateByUrl('/admin/main/products')

  }

}
