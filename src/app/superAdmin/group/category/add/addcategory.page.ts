/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, OnInit } from '@angular/core'
import { CategoryService } from 'src/app/services/category.service';
import { Router , ActivatedRoute } from '@angular/router';
import { LoadingController } from "@ionic/angular";
import { ToastService } from "src/app/services/toast.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { ImagePicker , ImagePickerOptions } from '@ionic-native/image-picker/ngx';


@Component({
  selector: 'app-addcategory',
  templateUrl: 'addcategory.page.html',
  styleUrls: ['addcategory.page.scss'],
})
export class AddCategoryPage implements OnInit {

  fg: FormGroup;
  imagepath:string;
  uploadProgress: number;
  resourceURL = environment.RESOURCE_URL;
  id = this.route.snapshot.paramMap.get('id');
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryservice: CategoryService,
    public loadingController: LoadingController,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private http: HttpClient
    // private imagePicker: ImagePicker
    ) {}

    ngOnInit() {
      this.fg = this.formBuilder.group({
        'Name': [null,  [Validators.required]],
        'Description': [null],
        'GroupId': [this.id],
        'Thumbnail': [null],
        'Banner': [null],
      });
      this.fg.value.Name=' ';
    }

  ionViewDidEnter() {
  
  }

  preventDefault(e) {
    e.preventDefault();
  }

 

  pickimage()
  {
    //  var options: ImagePickerOptions = { 
    //   maximumImagesCount: 2 ,
    //   quality: 50};
    // this.imagePicker.getPictures(options).then((results) => {
    //   this.imagepath = results[0];
    //   for (var i = 0; i < results.length; i++) {
    //       console.log('Image URI: ' + results[i]);
    //   }
    // }, (err) => { });
  }


  async AddCategory() {
    let obj = this.fg.value;
    obj.Name=obj.Name.trim();
    if(obj.Name.length == 0 )
    {
     this.fg.controls['Name'].setValue(null);
     this.fg.controls['Name'].updateValueAndValidity(); 
    }
    else{
    const loading = await this.loadingController.create({ message: "Loading" });
    await loading.present();
    await this.categoryservice.Postcategory(this.fg.value).subscribe(
      res => {
        loading.dismiss();
        this.toastService.create("Successfully Added", "success");
        this.router.navigate(['superadmin/group/'+this.id+'/category']);

      },
      err => {
        loading.dismiss();
        this.toastService.create(err, "danger");
      }
    );
    }
  }

 
  validation_messages = {
  
    Name: [{ type: "required", message: "Name is required." },
  ],
    Description: [{ type: "required", message: "Description is required." }],

  }

}
