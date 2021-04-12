import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { elementAt } from 'rxjs/operators';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public route: Router, private storage: Storage) {
    setTimeout(() => {
      this.storage.get("User").then(value=>{
        if(!value)
        {
          this.route.navigateByUrl('/home');
        }
        else if(value.RoleName=='Customer')
        {
          this.route.navigateByUrl('/home');
        }
        else if(value.RoleName=='ShopOwner'){
          this.route.navigateByUrl('/shopowner/dashboard');
        }
        else if(value.RoleName=='SuperAdmin'){
          this.route.navigateByUrl('/superadmin/dashboard');
        } 
        else
        {
          this.route.navigateByUrl('/home');
        }
      }); 
    }, 2000);
   }

  ngOnInit() {
  }

}
