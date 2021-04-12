import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoadingController } from "@ionic/angular";
import {LoginService} from "src/app/services/login.service"
import { ToastService } from 'src/app/services/toast.service';
import {Router} from '@angular/router'
import { SharedService } from "src/app/services/shared.service";
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: "app-superadmin",
  templateUrl: './dashboard.page.html',
 styleUrls: ['./superadmin.page.scss'],
})
export class SuperAdminPage implements OnInit {
  data: any;
  event: any;
   
  private updateSubscription: Subscription;
  constructor(
    private loadController: LoadingController,
    private api: LoginService,
    private toastService: ToastService,
    private router:Router,
    public sharedservice: SharedService,
  ) {}

  ngOnInit() {

    // this.updateSubscription = interval(15000).subscribe(
    //   (val) => { this.ionViewDidEnter();
    //  });
  }
  
  async ionViewDidEnter(){
    this.GetSuperAdminData();
    // this.data = console.log(this.sharedservice.user);

  }


async GetSuperAdminData()
    {
          const loading=await this.loadController.create({
            message: "Loading"
          });
          await loading.present();
          await this.api.GetSuperAdminData().subscribe(
            res=>{
                  loading.dismiss();
                  if(res)
                  {
                    loading.dismiss();
                    // console.log(res);
                    this.data=res;
                  }
                  else{
                    loading.dismiss();
                    this.toastService.create(res.Message, "danger");
                  }

            },
            err => {
              loading.dismiss();
              this.toastService.create(err, "danger");
            }
          );

    } 
    doRefresh(event) {
      console.log('Begin async operation');
      this.ngOnInit();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 1000);
    }
    activeshop()
    {
      this.router.navigateByUrl('superadmin/shop/approved');
    }
    disabledshop()
    {
      this.router.navigateByUrl('superadmin/shop/unapproved');
    }
    activerider()
    {
      this.router.navigateByUrl('superadmin/rider/approved');
    }
    disabledrider()
    {
      this.router.navigateByUrl('superadmin/rider/unapproved');
    }
    activeShopOwners()
    {
      this.router.navigateByUrl('superadmin/user');
    }

 
    activeuser(){
      this.router.navigateByUrl('superadmin/user');

    }
}
