import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { HomePopover } from './homepopover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController
  ) {

  }

  showPopover(ev) {
    let popover = this.popoverCtrl.create(HomePopover);
    popover.present({
      ev: ev
    });
  }

}
