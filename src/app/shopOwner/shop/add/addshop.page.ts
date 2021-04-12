/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { Component, OnInit, ViewChild, ChangeDetectorRef, NgZone } from '@angular/core'
import { ShopService } from 'src/app/services/shop.service';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';
import { LoadingController } from "@ionic/angular";
import { ToastService } from "src/app/services/toast.service";
import { SharedService } from "src/app/services/shared.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Geolocation } from "@ionic-native/geolocation/ngx";
//import { AnyTxtRecord } from 'dns';
// import { ImagePicker , ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { google } from '@google/maps';
declare var google;

@Component({
  selector: 'app-addshop',
  templateUrl: 'addshop.page.html',
  styleUrls: ['addshop.page.scss'],
})
export class AddShopPage implements OnInit {

  fg: FormGroup;
  imagepath: string;
  groups: any;
  banklist: any;
  uploadProgress: number;
  resourceURL = environment.RESOURCE_URL;
  myMarker;
  uploadinglogo;
  uploadingbanner;
  map;
  latitude: any;
  longitude: any;
  @ViewChild("mapElement", { static: true }) mapElement;

  GoogleAutocomplete: google.maps.places.AutocompleteService;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  selectedPlace: string;

  constructor(
    private router: Router,
    private shopservice: ShopService,
    private sharedservice: SharedService,
    private groupservice: GroupService,
    public loadingController: LoadingController,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private geolocation: Geolocation,
    private fileChooser: FileChooser,
    private file: File,
    private filePath: FilePath,
    private transfer: FileTransfer,
    private ref: ChangeDetectorRef,
    public zone: NgZone) {

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  updateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        console.log(status);
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }

  selectSearchResult(item) {

    this.myMarker.setMap(null);
    this.autocompleteItems = [];
    var geocoder1 = new google.maps.Geocoder();

    geocoder1.geocode({ 'placeId': item.place_id }, (results, status) => {
      if (status === 'OK' && results[0]) {
        this.myMarker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
          draggable: true
        });

        this.map.setCenter(this.myMarker.position);
        this.myMarker.setMap(this.map);
        this.selectedPlace = "" + results[0].formatted_address;
        this.fg.controls.Address.setValue("" + results[0].formatted_address);

        google.maps.event.addListener(this.myMarker, "dragend", () => {
          this.latitude = this.myMarker.getPosition().lat();
          this.longitude = this.myMarker.getPosition().lng();
          this.getAddressFromMarker(this.latitude, this.longitude, this.fg)
        });
      }
    })
  }




  ngOnInit() {
    this.fg = this.formBuilder.group({
      'Name': [null, [Validators.required]],
      'GroupId': [null, Validators.required],
      'UserId': [null],
      'Contact': [null, Validators.compose([
        Validators.required,
        Validators.pattern("^0[03][0-9]{9}$")
      ])],
      'AccountType': [null, Validators.required],
      'BankName': [null],
      'AccountNumber': [null, Validators.required],
      'NDN_Number': [null, [Validators.required, Validators.pattern("[0-9]{13}$")]],
      'Latitude': [null],
      'Longitude': [null],
      'DeliveryRadius': [null, Validators.compose([Validators.required, Validators.min(10)])],
      'Address': [null, Validators.required],
      'IsReturnable': [null],
      'IsVerified': [false],
      'IsDisabled': [false],
      'Logo': [null, Validators.required],
      // 'Banner': [null],
    });
    this.fg.value.Name = ' ';
    this.fg.value.NDN_Number = ' ';
    this.fg.value.AccountNumber = ' ';
    this.fg.value.Address = ' ';
  }

  ionViewDidEnter() {
    this.toastService.create("Kindly Open your Gps location then add Shop", "success");
    this.getGroups();
    this.GetBankList();
    this.getUserLocation();
  }
  BankAccount(event) {
    console.log(event.target.value);
  }

  AccountTypeForPayment(event) {
    this.fg.value.AccountType = event.target.value;
    this.fg.controls['AccountType'].setValue(event.target.value);
    // if(this.fg.value.AccountType= 'Bank')
    // {
    //   this.fg.controls['BankName'].setValidators(Validators.required);
    // }
    // this.fg.value.AccountType= event.target.value;
    console.log(event.target.value);
  }

  BankName(event) {
    this.fg.controls['BankName'].setValue(event.target.value);
    console.log(event.target.value);

  }

  preventDefault(e) {
    e.preventDefault();
  }
  uploadPhoto(type) {

    this.fileChooser.open().then(async uri => {
      console.log(uri);
      await this.filePath.resolveNativePath(uri).then(filePath => {
        //this.filesPath = filePath;
        if (type == 'banner') {
          this.uploadingbanner = true;
          this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
            let files = fileInfo as FileEntry;
            files.file(async success => {
              //this.fileType   = success.type;
              if (success.size < 204800) {
                let filesName = success.name;
                console.log(filesName);
                let options: FileUploadOptions = {
                  fileName: filesName
                }
                const fileTransfer: FileTransferObject = this.transfer.create();
                await fileTransfer.upload(uri, environment.BASE_URL + 'upload', options)
                  .then((data) => {
                    // success
                    // console.log(data);
                    this.toastService.create("successfully Uploaded");
                    this.uploadingbanner = false;
                    let dbpath = JSON.parse(data.response);
                    this.fg.controls['Banner'].setValue(dbpath.dbPath);
                    this.ref.detectChanges();
                    //console.log(this.fg1.value.MonogramImage);
                  }, (err) => {
                    console.log(err)
                    // error
                  })
              }
              else
                this.uploadingbanner = false;
              this.toastService.create("File size must be less than 200 kb", "danger");
              this.uploadingbanner = false;
            });
          }, err => {
            console.log(err);
            throw err;
          });
        }
        else if (type == 'logo') {
          this.uploadinglogo = true;
          this.file.resolveLocalFilesystemUrl(filePath).then(fileInfo => {
            let files = fileInfo as FileEntry;
            files.file(async success => {
              //this.fileType   = success.type;
              if (success.size < 204800) {
                let filesName = success.name;
                console.log(filesName);
                let options: FileUploadOptions = {
                  fileName: filesName
                }
                const fileTransfer: FileTransferObject = this.transfer.create();
                await fileTransfer.upload(uri, environment.BASE_URL + 'upload', options)
                  .then((data) => {
                    // success
                    // console.log(data);
                    this.toastService.create("successfully Uploaded");
                    this.uploadinglogo = false;
                    let dbpath = JSON.parse(data.response);
                    this.fg.controls['Logo'].setValue(dbpath.dbPath);
                    this.ref.detectChanges();
                    //console.log(this.fg1.value.MonogramImage);
                  }, (err) => {
                    console.log(err)
                    // error
                  })
              }
              else {
                this.uploadinglogo = false;
                this.toastService.create("File size must be less than 200 kb", "danger");
              }
            });
          }, err => {
            console.log(err);
            throw err;
          });
        }
      }, err => {
        console.log(err);
        throw err;
      });
    }, err => {
      console.log(err);
      throw err;
    });

  }


  pickimage() {
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


  async AddShop() {
    this.fg.controls['UserId'].setValue(this.sharedservice.user.sid);
    // this.fg.controls['Latitude'].setValue(this.Latitude);
    // this.fg.controls['Longitude'].setValue(this.Longitude);
    this.fg.value.Latitude = this.latitude;
    this.fg.value.Longitude = this.longitude;
    let obj = this.fg.value;
    obj.Name = obj.Name.trim();
    if (obj.Name.length == null && obj.Address == null && obj.AccountNumber == null) {
      this.toastService.create("Please upload the shop photo", 'danger');
    }
    obj.Address = obj.Address.trim();
    obj.AccountNumber = obj.AccountNumber.trim();
    if (obj.Name.length == 0 && obj.Address == 0 && obj.AccountNumber == 0) {
      this.fg.controls['Name'].setValue(null);
      this.fg.controls['Name'].updateValueAndValidity();
      this.fg.controls['Address'].setValue(null);
      this.fg.controls['Address'].updateValueAndValidity();
      this.fg.controls['AccountNumber'].setValue(null);
      this.fg.controls['AccountNumber'].updateValueAndValidity();
    }
    else if (obj.Name.length == 0 && obj.Address == 0) {
      this.fg.controls['Name'].setValue(null);
      this.fg.controls['Name'].updateValueAndValidity();
      this.fg.controls['Address'].setValue(null);
      this.fg.controls['Address'].updateValueAndValidity();
    }
    else if (obj.Name.length == 0 && obj.AccountNumber == 0) {
      this.fg.controls['Name'].setValue(null);
      this.fg.controls['Name'].updateValueAndValidity();
      this.fg.controls['AccountNumber'].setValue(null);
      this.fg.controls['AccountNumber'].updateValueAndValidity();
    }
    else if (obj.Address == 0 && obj.AccountNumber == 0) {
      this.fg.controls['Address'].setValue(null);
      this.fg.controls['Address'].updateValueAndValidity();
      this.fg.controls['AccountNumber'].setValue(null);
      this.fg.controls['AccountNumber'].updateValueAndValidity();
    }
    else if (obj.Name.length == 0) {
      this.fg.controls['Name'].setValue(null);
      this.fg.controls['Name'].updateValueAndValidity();
    }
    else if (obj.Address.length == 0) {
      this.fg.controls['Address'].setValue(null);
      this.fg.controls['Address'].updateValueAndValidity();
    }
    else if (obj.NDN_Number.length < 13) {
      this.toastService.create("NTN number must be 13", "danger");
      this.fg.controls['Address'].updateValueAndValidity();
    }
    else if (obj.AccountNumber.length == 0) {
      this.fg.controls['AccountNumber'].setValue(null);
      this.fg.controls['AccountNumber'].updateValueAndValidity();
    }
    else if (this.fg.value.DeliveryRadius < 10) {
      this.toastService.create("radius must be be 10 or higher", "danger");
      return false;
    }
    else if (this.fg.value.price < 1) {
      this.toastService.create("Price must be greater then zero", "danger");
    }
    else if (this.fg.value.Logo == null) {
      this.toastService.create("Please upload the shop photo", 'danger');
    }

    else {
      const loading = await this.loadingController.create({ message: "Loading" });
      await loading.present();
      await this.shopservice.PostShop(this.fg.value).subscribe(
        res => {
          console.log(res, "shop");
          loading.dismiss();
          this.toastService.create("Shop Successfully Added", "success");
          this.router.navigate(['shopowner/shops']);

        },
        err => {
          loading.dismiss();
          this.toastService.create(err, "danger");
        }
      );
    }


  }



  getUserLocation() {
    this.geolocation
      .getCurrentPosition({ maximumAge: 40000, timeout: 4000, enableHighAccuracy: true })
      .then(resp => {

        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        console.log()
        this.loadMap();
        console.log("latitude", this.latitude, "longitude", this.longitude);
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  loadMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 15
    });

    this.myMarker = new google.maps.Marker({
      position: { lat: this.latitude, lng: this.longitude },
      draggable: true
    });
    this.map.setCenter(this.myMarker.position);
    this.myMarker.setMap(this.map);

    this.getAddressFromMarker(this.latitude, this.longitude, this.fg);

    google.maps.event.addListener(this.myMarker, "dragend", () => {
      this.latitude = this.myMarker.getPosition().lat();
      this.longitude = this.myMarker.getPosition().lng();

      // FOR UPDATING MAP LOCATION IN INPUT FIELD
      this.getAddressFromMarker(this.latitude, this.longitude, this.fg);


    });


  }


  getAddressFromMarker(markLat: any, markLong: any, formGroup: FormGroup) {
    var latlng = new google.maps.LatLng(markLat, markLong);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[1]) {
          var strAddress = "";
          strAddress = strAddress + results[1].formatted_address;
          formGroup.controls.Address.setValue("" + strAddress);
        }
      }
    });
  }


  async getGroups() {
    const loading = await this.loadingController.create({ message: "Loading" });
    await loading.present();
    await this.groupservice.GetGroups().subscribe(
      res => {
        loading.dismiss();
        if (res) {
          console.log(res);
          this.groups = res;

          //  this.ngOnInit();
        } else {
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

  async GetBankList() {
    const loading = await this.loadingController.create({ message: "Loading" });
    await loading.present();
    await this.shopservice.GetBank().subscribe(
      res => {
        loading.dismiss();
        if (res) {
          console.log(res);
          this.banklist = res;
        } else {
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

  validation_messages = {

    Name: [{ type: "required", message: "Name is required." },
    { type: "pattern", message: "space is not allowed to start." }
    ],
    lastName: [{ type: "required", message: "LastName is required." }],
    NDN_Number: [
      { type: "required", message: "Please enter a valid NTN number:" },
      { type: "pattern", message: "NTN number must be 13 character" },
    ],
    mobileNumber: [
      { type: "required", message: "MobileNumber is required & without space." },
      { type: "pattern", message: "Mobile number like 03xxxxxxxxx and length 11 char" }
    ],
    Address: [
      { type: "required", message: "Address is required." },
    ],
    Type: [
      { type: "required", message: "Shop cateory is required." },
    ],
    AccountType: [
      { type: "required", message: "Payment method is required." },
    ],
    Radious: [
      { type: "required", message: "Field is required." },
      { type: "min", message: "radius must be be 10 or higher." },
    ],
    AccountNumber: [
      { type: "required", message: "Account Number is required." },
    ],
    BankName: [
      { type: "required", message: "Account Number is required." },
    ],
  };


}