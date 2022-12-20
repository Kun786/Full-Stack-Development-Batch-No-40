import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Shared/Services/product.service';
import { ProductInterface } from 'src/app/Shared/Interfaces/product';
import { MessengerService } from 'src/app/Shared/Services/messenger.service';
import { BUTTONTEXT } from 'src/app/Shared/enums/button-text';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public productObject : ProductInterface | any = {};
  public url : string | any = 'http://localhost:8888/';
  public selectedSizes:any = [];
  public selectedQuantity:Number | any = 0;
  public stockQuantity:any;
  public enumButtonText = BUTTONTEXT;
  constructor(
    private readonly ActivatedRoute:ActivatedRoute,
    private readonly ProductService:ProductService,
    private readonly MessengerService:MessengerService
  ) { }

  ngOnInit(): void {
    this.getRouterParamatersandGetDataFromBackEnd();
  }

  public getRouterParamatersandGetDataFromBackEnd(){
    // const paraId = this.ActivatedRoute.snapshot.params['Id'];
    const parameterizedId = this.ActivatedRoute.snapshot.paramMap.get('Id');
    this.ProductService.GetProductById(parameterizedId).subscribe((response:any) => {
      this.productObject = response.Result;
      this.stockQuantity = this.productObject.quantity;
    })
  }

  public getSizes(event:any) {
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);
    }
  }

  public decrementQuantity(){
    if(this.selectedQuantity > 0){
      this.selectedQuantity --;
    }
  }

  public incrementQuantity(){
    if(this.selectedQuantity < this.stockQuantity){
      this.selectedQuantity ++;
    }
  }
}
