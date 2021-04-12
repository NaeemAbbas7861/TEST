import { Component, OnInit, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { FunctionsService } from '../functions.service';
import { environment } from 'src/environments/environment';
import { Wishlist } from '../_models/wishlist';
import { IonList } from '@ionic/angular';
import { ToastService } from '../services/toast.service';
import {Cart} from 'src/app/_models/cart';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  env = environment;
  show = true;
  wishlist:any;
  filterwishlist=[];
  cart = [];
  newProduct = new Cart();
  filtercart=[];

  @ViewChild('slidingList') slidingList: IonList;
  constructor(private storage: Storage,
    public fun: FunctionsService,
    private toastService: ToastService) { }

  async ngOnInit() {
  await  this.storage.get("Wishlist").then(value=> {
      if(value)
      {
        console.log(value.length);
         this.wishlist = value;
         if (value.length === 0) {
          this.show = false;
        }
        else{
        this.show = true;
        console.log(this.wishlist);
        }   
      }
      else{
        this.show = false;
      }
     });
    }

    async remove(j) {
      this.fun.removeConform().then(res => {
        console.log('res conform', res);
        if (res === 'ok') {
          this.slidingList.closeSlidingItems();
         this.wishlist.splice(j, 1);
         this.storage.set("Wishlist", this.wishlist);
          if (this.wishlist.length === 0) {
            this.show = !this.show;
          }
        }
      });
    }


    async Onclick(product, productsId){
      this.newProduct.productId = productsId;
      this.newProduct.title = product.title;
      this.newProduct.description = product.description;
      this.newProduct.productDetail = product.productDetail;
      this.newProduct.productCode = product.productCode;
      this.newProduct.price = product.price;
      this.newProduct.discount= product.discount;
      this.newProduct.unit = product.unit;
      this.newProduct.weight = product.weight;
      this.newProduct.AvaliableQty=product.quantity;
      this.newProduct.quantity = 1;
      this.newProduct.shopId = product.shopId;
      // console.log(this.newProduct);
      await this.storage.get("ShopId").then(value=> {
        console.log(value, this.newProduct.shopId);
        if(value !=  this.newProduct.shopId)
        {
          console.log(value, this.newProduct.shopId);
          this.storage.remove('Cart');
          this.storage.remove('TotalAmount');
          this.storage.set("ShopId" ,  this.newProduct.shopId);
          console.log("product Remove");
        }
      });
    
      await this.storage.get("Cart").then(value=> {
         if(value)
         {
          this.cart = value;
                if(this.cart.length>0)  
                    {
                      for(var i=0;i<this.cart.length;i++)
                        {
                         if(this.cart[i].productId==productsId )
                             {
                                
                                    this.toastService.create("Product is Already Added in Cart");
                                      
                              }
                              if(this.cart[i].shopId !=  this.newProduct.shopId)
                              {
                                this.toastService.create("Do you want to clear previous shop Order");
                                    
                              }
                        }  

                this.storage.set("Cart", this.cart);
                 this.storage.get("Wishlist").then(value=> {
                   console.log(value);

                });
                this.goToCart();
                     } 
            else{
          
            this.cart.push(this.newProduct);
            this.storage.set("Cart", this.cart);
            this.goToCart();
              }
        }
      else{
      this.cart.push(this.newProduct);
      this.storage.set("Cart", this.cart);
      this.goToCart();
          }    
       }  );
     

       
      }
      
  goToCart() {
    this.fun.navigate('cart', false);
  }
}
