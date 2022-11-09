import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/Services/product.service';

@Component({
  selector: 'app-products-analytics',
  templateUrl: './products-analytics.component.html',
  styleUrls: ['./products-analytics.component.css']
})
export class ProductsAnalyticsComponent implements OnInit {
  Url='http://localhost:8888/'
  productArray:any = [];
  particularProductData:any = {};
  constructor(private _ProductService:ProductService, private _ToastrService:ToastrService) { }

  ngOnInit(): void {
    this.populateProductArray();
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
    this._ProductService.GetProductById(_id).subscribe((res:any) => {
      this.particularProductData = res.Result;
    })
  }

  deleteProduct(_id:any){
    this._ProductService.DeleteProductById(_id).subscribe((res:any) => {
      this._ToastrService.error(res.Message);
      this.productArray = [];
      this.populateProductArray();
    })
  }

}
