






/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { DataService } from '../data.service';
import { AlertController, MenuController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { LoadingController } from "@ionic/angular";
import { ToastService } from "src/app/services/toast.service";
import { Storage } from '@ionic/storage';
import { Order } from 'src/app/_models/order';
import { OrderItem } from 'src/app/_models/orderitem';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { google } from '@google/maps';

declare var google: any;
//import swal from 'sweetalert';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})

export class CheckoutPage implements OnInit {
  addNewPayment = false;
  Order = new Order();
  OrderItem = new OrderItem();
  OrderItems = [];
  selfpick = false;
  fg: FormGroup;
  customerLat1: any;
  customerlong1: any;
  resourceURL = environment.RESOURCE_URL;
  myMarker;
  Delievery_Address: any;

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

  constructor(private menuCtrl: MenuController, private fun: FunctionsService, private dataService: DataService, private alertController: AlertController, private orderservice: OrderService,
    public loadingController: LoadingController,
    private toastService: ToastService,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private geolocation: Geolocation,
    private fileChooser: FileChooser,
    private file: File,
    private filePath: FilePath,
    private transfer: FileTransfer,
    public ref: ChangeDetectorRef,
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
        this.fg.controls.DelieveryAddress.setValue("" + results[0].formatted_address);

        google.maps.event.addListener(this.myMarker, "dragend", () => {
          this.latitude = this.myMarker.getPosition().lat();
          this.longitude = this.myMarker.getPosition().lng();
          this.getAddressFromMarker(this.latitude, this.longitude, this.fg)
        });
      }
    })
  }

  async ngOnInit() {

    this.storage.get("IsLoggedIn").then(value => {
      if (!value) {
        this.fun.navigate('login', false)
      }
    });

    this.fg = this.formBuilder.group({
      // 'IsSelfPick' : [true],
      // 'RiderName': [null],
      // 'RiderVehicleNo': [null],
      // 'RiderContactNo': [null],
      // 'UserId': [],
      // 'ShopId':[],
      // // 'Description': [null, Validators.required],
      // 'PayMentMethod': 1,
      // 'TotalAmmount': [],
      // 'OrderItems':[],
      // 'CustomerLat': [],
      // 'CustomerLong': [],
      'DelieveryAddress': [null, Validators.required],
      'PayMentMethod': [null, Validators.required],
    });
    this.fg.value.DelieveryAddress = ' ';
    console.log(this.fg.value);
    this.getUserLocation();
  }

  async ionViewDidEnter() {
    // await
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');

  }
  async getUserLocation() {
    await this.geolocation
      .getCurrentPosition({ maximumAge: 40000, timeout: 4000, enableHighAccuracy: true })
      .then(async resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        console.log()
        await this.loadMap();
        console.log("latitude", this.latitude, "longitude", this.longitude);
      })
      .catch(error => {
        console.log("Error getting location", error);
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
          formGroup.controls.DelieveryAddress.setValue("" + strAddress);
        }
      }
    });
  }



  async loadMap() {

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 15
    });
    let geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();

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
      this.getAddressFromMarker(this.latitude, this.longitude, this.fg)
    });







  }
  onChange(event) {
    console.log(this.Delievery_Address);


  }

  addPayment() {
    this.addNewPayment = !this.addNewPayment;
  }

  async done() {
    // swal("Awesome", "You just bought 2 awesome dresses", "success");
    // this.fun.navigate('home',false);
    if (this.fg.value.DelieveryAddress == null) {
      this.fg.value.DelieveryAddress = ' ';
    }
    console.log(this.fg.value);
    let obj = this.fg.value;
    obj.DelieveryAddress = obj.DelieveryAddress.trim();
    // obj.DelieveryAddress=obj.DelieveryAddress.trim();
    if (this.fg.value.PayMentMethod != 2 && this.fg.value.PayMentMethod != 1) {
      this.toastService.create('Please select payment method', "danger");
    }
    else if (obj.DelieveryAddress.length == 0) {
      this.toastService.create('Delivery Address Must be required', "danger");
    }
    else {
      const loading = await this.loadingController.create({ message: "Loading" });
      await loading.present();
      await this.storage.get("Cart").then(items => {
        if (items) {
          console.log(items);
          items.forEach(element => {
            //  this.OrderItem.ProductId = element.productId;
            //  this.OrderItem.Quantity = element.quantity;
            var Total = (element.price * element.quantity);

            this.OrderItems.push({ ProductId: element.productId, Quantity: element.quantity, TotalAmount: (element.price * element.quantity) });
          });
          console.log(this.OrderItems);
          this.fg.value.OrderItems = this.OrderItems;
          console.log(this.fg.value);
        }
      });
      await this.storage.get("ReturnedProductId").then(value => {
        this.fg.value.ReturnedProductId = value;
      });

      await this.storage.get("ReturnQuantity").then(value => {
        this.fg.value.ReturnQuantity = value;
      });

      await this.storage.get("TotalAmount").then(value => {
        this.fg.value.TotalAmmount = value;
      });
      await this.storage.get("ReturnDiscount").then(value => {
        this.fg.value.ReturnDiscount = value;
      });

      await this.storage.get("ShopId").then(value => {
        this.fg.value.ShopId = value;
      });

      await this.storage.get("User").then(value => {
        this.fg.value.UserId = value.sid;
      });
      await this.storage.get("customerLat").then(value => {
        this.fg.value.CustomerLat = this.latitude;
      });
      await this.storage.get("customerLong").then(value => {
        this.fg.value.CustomerLong = this.longitude;
      });
      await this.storage.get("deliveryCharges").then(value => {
        this.fg.value.deliveryCharges = value;
      });
      console.log(this.fg.value);

      this.orderservice.PostOrder(this.fg.value).subscribe(res => {
        if (res) {
          loading.dismiss();
          this.storage.remove('Cart');
          this.storage.remove('deliveryCharges');
          this.storage.remove('TotalAmount');
          this.storage.remove('ReturnDiscount');
          this.storage.remove('isReturnable');
          this.storage.remove('ReturnedProductId');
          this.storage.remove('ReturnQuantity');
          this.toastService.create('Order Successfully Placed');
          this.fun.navigate('home', false);
        }
      }, (err) => {
        loading.dismiss();
        this.toastService.create(err, 'danger');
      });
    }
  }
  async back() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you want to cancel entering your payment info?',
      buttons: [
        {
          text: 'Yes',
          cssClass: 'mycolor',
          handler: (blah) => {
            this.fun.back();
          }
        }, {
          text: 'No',
          role: 'cancel',
          cssClass: 'mycolor',
          handler: () => { }
        }
      ]
    });

    await alert.present();
  }
  async printvalue() {
    console.log(this.fg.value.IsSelfPick);
    if (this.fg.value.IsSelfPick == 'true')
      this.selfpick = true;
    else
      this.selfpick = false;
    console.log(this.selfpick);
  }
  validation_messages = {


    Address: [
      { type: "required", message: "Delivery address is required." },
    ],

  };
}
