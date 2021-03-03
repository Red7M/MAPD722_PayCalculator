import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AboutPage } from './about.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberOfHours = 0;
  hoursRate = 0;
  regularPay = 0;
  overtimePay = 0;
  totalPay = 0;
  tax = 0;
  aboutPage: AboutPage;

  constructor(public navCtrl: NavController) {  }

  calculateRegularPay() {
    if (this.numberOfHours <= 40) {
      console.log('Regular pay');
      this.regularPay = this.numberOfHours * this.hoursRate;
      this.overtimePay = 0;
    } else {
      console.log('Overtime pay');
      this.overtimePay = (this.numberOfHours - 40) * this.hoursRate * 1.5;
      this.regularPay = 40 * this.hoursRate;
    }

    // Total pay pre tax
    this.totalPay = this.regularPay + this.overtimePay;

    // Tax based on total pay
    this.tax = this.totalPay * 0.18;
  }

  openAboutPage() {
  }
}
