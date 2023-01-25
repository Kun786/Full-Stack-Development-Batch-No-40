import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Shared/Services/product.service';
import { ProductInterface } from 'src/app/Shared/Interfaces/product';
import { MessengerService } from 'src/app/Shared/Services/messenger.service';
import { BUTTONTEXT } from 'src/app/Shared/enums/button-text';
import { LocalStoragesmanagementService } from 'src/app/Shared/Services/local-storagesmanagement.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public productObject: ProductInterface | any = {};
  public url: string | any = 'http://localhost:8888/';
  public selectedSizes: any = [];
  public selectedQuantity: Number | any = 0;
  public stockQuantity: any;
  public enumButtonText = BUTTONTEXT;
  public offCanvas = '';
  public cart: any = [];
  constructor(
    private readonly ActivatedRoute: ActivatedRoute,
    private readonly ProductService: ProductService,
    private readonly MessengerService: MessengerService,
    private readonly ToastrService: ToastrService,
    private readonly LocalStorageManagementService: LocalStoragesmanagementService
  ) { }

  ngOnInit(): void {
    this.getRouterParamatersandGetDataFromBackEnd();
  }

  public getRouterParamatersandGetDataFromBackEnd() {
    // const paraId = this.ActivatedRoute.snapshot.params['Id'];
    const parameterizedId = this.ActivatedRoute.snapshot.paramMap.get('Id');
    this.ProductService.GetProductById(parameterizedId).subscribe((response: any) => {
      this.productObject = response.Result;
      this.stockQuantity = this.productObject.quantity;
    })
  }

  public getSizes(event: any) {
    if (event.target.checked) {
      this.selectedSizes.push(event.target.value);
    }
    else {
      this.selectedSizes = this.selectedSizes.filter((value: any) => value != event.target.value);
    }
  }

  public decrementQuantity() {
    if (this.selectedQuantity > 0) {
      let getDataFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage();
      if (getDataFromLocalStorage !== null) {
        getDataFromLocalStorage.selectedQuantity--;
        this.LocalStorageManagementService.addToCart(getDataFromLocalStorage);
      }
      this.selectedQuantity--;
    }
  }

  public incrementQuantity() {
    if (this.selectedQuantity < this.stockQuantity) {
      this.selectedQuantity++;
    }
  }

  //Chat GPT say refractor kia hai ye
  // public addToCart(){
  //   if(!this.selectedSizes.length){
  //     this.ToastrService.error('Please Select the Size before you proceeed to cart')
  //     return;
  //   }
  //   let processedCartArray = this.LocalStorageManagementService.getCartFromLocalStorage() || [];
  //   let processedCartObject = {
  //     productId: this.productObject._id,
  //     imageUrl: this.productObject?.imageDetaisl[0]?.ImageUrl,
  //     selectedSizes: this.selectedSizes,
  //     selectedQuantity: this.selectedQuantity,
  //     ...this.productObject
  //   }
  //   processedCartArray.push(processedCartObject);
  //   this.LocalStorageManagementService.addToCart(processedCartArray);
  // }

  // ChatSonic
  // addToCart() {
  //   if (this.selectedSizes.length <= 0) {
  //     this.ToastrService.error('Please Select the Size before you proceeed to cart')
  //   } else {
  //     let { _id, category, color, companyName, description, price, productName, quantity } = this.productObject;
  //     let processedCartObject = {
  //       productId: _id,
  //       imageUrl: this.productObject?.imageDetaisl[0]?.ImageUrl,
  //       selectedSizes: this.selectedSizes,
  //       selectedQuantity: this.selectedQuantity,
  //       category, color, companyName, description, price, productName, quantity
  //     }
  
  //     let processedCartArray = this.LocalStorageManagementService.getCartFromLocalStorage() ?? [];
  //     processedCartArray.push(processedCartObject);
  //     this.LocalStorageManagementService.addToCart(processedCartArray);
  //     this.getCart();
  //   }
  // }
  //Chat GPT say refractor kia hai ye

  //Without Refgractor
  public addToCart() {
    if (this.selectedSizes.length <= 0) {
      this.ToastrService.error('Please Select the Size before you proceeed to cart')
    } else {
      this.offCanvas = 'offcanvas';
      let { _id, category, color, companyName, description, price, productName, quantity } = this.productObject;
      let processedCartObject = {
        productId: _id,
        imageUrl: this.productObject?.imageDetaisl[0]?.ImageUrl,
        selectedSizes: this.selectedSizes,
        selectedQuantity: this.selectedQuantity,
        category, color, companyName, description, price, productName, quantity
      }
      let processedCartArray = [];
      if (this.LocalStorageManagementService.getCartFromLocalStorage() !== null) {
        let valueAlreadyExists = this.LocalStorageManagementService.getCartFromLocalStorage();
        valueAlreadyExists.forEach((element: any) => {
          processedCartArray.push(element);
        });
      }
      processedCartArray.push(processedCartObject);
      this.LocalStorageManagementService.addToCart(processedCartArray);
    }
    this.getCart();
  }
  //Without Refgractor

  //Chatgpt ccode 
  // decrementQuantityFromCanvas(id: any) {
  //   const cart = this.LocalStorageManagementService.getCartFromLocalStorage();
  //   const item = cart.find(item => item.productId === id);
  //   if (item && item.quantity > item.selectedQuantity) {
  //     item.selectedQuantity++;
  //     this.LocalStorageManagementService.addToCart(cart);
  //   }
  //   this.getCart();
  // }
  //Chatgpt ccode 

  decrementQuantityFromCanvas(id: any) {
    const cartFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage();
    cartFromLocalStorage.forEach((object: any) => {
      if (object.productId === id && object.selectedQuantity > 0) {
        object.selectedQuantity--;
        this.LocalStorageManagementService.addToCart(cartFromLocalStorage)
      }
    });
    this.getCart();
  }

  incrementQuantityFromCanvas(id: any) {
    // Phelay local storages maind say Array ley kar aao
    const cartFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage();

    //Bhai abb loop karo  aur phir id ke according  woobject ley  kar  aoo  aur  uss  ke quanitity  bas ++ kardo
    cartFromLocalStorage.forEach((object: any) => {
      if (object.productId === id && object.quantity > object.selectedQuantity) {
        object.selectedQuantity++;
        this.LocalStorageManagementService.addToCart(cartFromLocalStorage)
      }
    });
    this.getCart();
  }


  public viewCart() {
    this.getCart();
  }

  public getCart() {
    this.cart = this.LocalStorageManagementService.getCartFromLocalStorage();
    /*
    [
      0:{},
      1:{},
      2:{}
    ]
    */
  }

  deleteItem(id:any){
    const cartFromLocalStorage = this.LocalStorageManagementService.getCartFromLocalStorage(); // sari array   from  local storage
    const updatedObject = cartFromLocalStorage.filter((object:any) => object.productId  !=  id); // filter
    this.LocalStorageManagementService.addToCart(updatedObject);
    this.getCart();
  }

}
