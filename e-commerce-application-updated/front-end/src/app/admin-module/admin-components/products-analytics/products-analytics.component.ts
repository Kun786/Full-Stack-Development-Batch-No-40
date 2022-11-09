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
  constructor(private _ProductService:ProductService) { }

  ngOnInit(): void {
    this._ProductService.GetAllProducts().subscribe((ResponseComingFrombackend:any) => {
      this.productArray = ResponseComingFrombackend.Result;
    })
  }

  getParticularData(_id:any){
    this._ProductService.GetProductById(_id).subscribe((res:any) => {
      res
    })
  }

}
