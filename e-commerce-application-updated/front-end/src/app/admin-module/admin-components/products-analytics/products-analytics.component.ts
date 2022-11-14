import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/Services/product.service';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-products-analytics',
  templateUrl: './products-analytics.component.html',
  styleUrls: ['./products-analytics.component.css']
})
export class ProductsAnalyticsComponent implements OnInit {
  Url='http://localhost:8888/'
  productArray:any = [];
  particularProductData:any = {};
  updateProductForm:any | FormGroup;
  makeIdPublic:any;
  constructor(private _ProductService:ProductService, private _ToastrService:ToastrService, private _Formbuilder:FormBuilder) { 
    this.updateProductFormModel();
  }

  ngOnInit(): void {
    this.populateProductArray();
  }

  updateProductFormModel(){
    this.updateProductForm = this._Formbuilder.group({
      productName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      description: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      companyName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      category: new FormControl('', Validators.required),
      // size: new FormArray([])
    })
  }

  populateProductArray(){
    this._ProductService.GetAllProducts().subscribe((ResponseComingFrombackend:any) => {
      ResponseComingFrombackend.Result.forEach((element:any) => {
        if(element.softDeleteStatus !== 1){
          this.productArray.push(element);
        }
      });
    })
  }

  getParticularData(_id:any){
    this.makeIdPublic = _id;
    this._ProductService.GetProductById(_id).subscribe((res:any) => {
      this.particularProductData = res.Result;
      this.updateProductForm = this._Formbuilder.group({
        productName: new FormControl(this.particularProductData?.productName, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
        quantity: new FormControl(this.particularProductData?.quantity, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        price: new FormControl(this.particularProductData?.price, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
        description: new FormControl(this.particularProductData?.description, Validators.required),
        color: new FormControl(this.particularProductData?.color, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        companyName: new FormControl(this.particularProductData?.companyName, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        category: new FormControl(this.particularProductData?.category, Validators.required),
        // size: new FormArray([])
      })
    })
  }

  deleteProduct(_id:any){
    this._ProductService.DeleteProductById(_id).subscribe((res:any) => {
      this._ToastrService.error(res.Message);
      this.productArray = [];
      this.populateProductArray();
    })
  }

  hardDeleteProduct(_id:any){
    this._ProductService.HardDeleteProductById(_id).subscribe(res => {
      res;
      //add toastr
    })
  }

 
  Update(){
    let payLoad = this.updateProductForm.value;
    payLoad['_id'] = this.makeIdPublic;
    this._ProductService.UpdateById(payLoad).subscribe((res:any) => {
      this._ToastrService.show(res.Message);
      this.getParticularData(this.makeIdPublic);
    })
  }

}
