/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ShopService } from 'src/app/services/shop.service';
import { LoadingController } from '@ionic/angular';
import { NavController, MenuController, Platform } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ToastService } from "src/app/services/toast.service";


@Component({
  selector: 'app-search',
  templateUrl: './shopearning.page.html',
  styleUrls: ['./shopearning.page.scss'],
})
export class ShopEarningPage implements OnInit {

  selectDateString:string =new Date().toISOString();
  minDate:string=new Date().toISOString();
  maxDate:string=new Date().toISOString();
  earning:any;
  orders:any;
  accountdetails:any;
  date:any;
  RoleName: any;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private menuCtrl: MenuController,  private nav: NavController, private platform:Platform,
    public loadingController: LoadingController,private toastService: ToastService,public orderservice: OrderService, private storage: Storage,  public route: ActivatedRoute,private alertController: AlertController
    
    ) {
      this.platform.ready().then(()=>{
        let date: Date=new Date();
        date.setDate(date.getDate() - 731);
        this.minDate=date.toISOString();
        date.setDate(1);

        date =new Date();
        date.setDate(date.getDate() + 0);
        this.maxDate=date.toISOString();
        date.setDate(1);
      }
      
      )
      
  }
  ionViewWillEnter(){
    this.storage.get("User").then(value=> {
      this.RoleName = value.RoleName;
      console.log(this.RoleName);
    });
    this.date= new Date();
    this.date.setDate(1);
    this.date=moment(this.date,"DD-MM-YYYY").format("YYYY-MM-DD");
    this.GetShopEarning(this.id,this.date);
  }
  

  ngOnInit() {
   
    //this.GetShopEarning(this.id,this.date)
    
  }

  DateChanger()
  {
    
    this.date=moment(this.date,"DD-MM-YYYY").format("YYYY-MM-DD");
    console.log(this.date);
  }

  async GetShopEarning(id,date)
  {
    date=moment(date,"YYYY-MM-01").format("YYYY-MM-01");
    const loading = await this.loadingController.create({ message: "Loading" });
    await loading.present();
     await this.orderservice.GetShopEarning(id,date).subscribe(
        res=>{
          loading.dismiss();     
          this.earning = res;
          if(this.earning.orders.length >0)
          {
            this.orders=res.orders;
          }
          this.accountdetails=res.orders[0];
          err => {
            console.log(err);
            loading.dismiss();
          }     
      });
    
  }
  doRefresh(event) {
    this.ionViewWillEnter();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  async ChangePaymentStatus(id,status,panelty)
  {
   if(status=='1')
   {
     panelty=0;
     status=2;
    const loading = await this.loadingController.create({ message: "Loading" });
    await loading.present();
     await this.orderservice.ChangePaymentStatus(id,status,panelty).subscribe(
      res => {
        console.log(res);
        // console.log(id,status, panelty);
        this.doRefresh(event);
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
  else if(status=='2')
  {
    const alert = await this.alertController.create({
      header: 'Add Panelty',
      inputs: [
        {
          name: 'Panelty1',
          placeholder: 'Amount'
        },
      ],
      buttons:  [
        {
          text: 'Ok',
          handler: async (alertData)=> {
         status=3;
         if(alertData.Panelty1.length==0)
         {
            alertData.Panelty1=0;
         }
         const loading = await this.loadingController.create({ message: "Loading" });
         await loading.present();
        await this.orderservice.ChangePaymentStatus(id,status,alertData.Panelty1 ).subscribe(
        res => {
        console.log(res);
        loading.dismiss();
        console.log(id,status, name);
        this.doRefresh(event);
       
      },
      err => {
        console.log(err);
        this.toastService.create("Invalid Number", 'danger');
        loading.dismiss();
      });       
          
    }
  },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  
}



}
