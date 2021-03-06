/**
 * Shoppr - E-commerce app starter Ionic 4(https://www.enappd.com)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source .
 * 
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {CountdownModule} from 'ngx-countdown'
import { IonicModule } from '@ionic/angular';
import { OtpverifyPage } from './otp_verifypage';

const routes: Routes = [
  {
    path: '',
    component: OtpverifyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    CountdownModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtpverifyPage]
})
export class OtpverifyPageModule {}
