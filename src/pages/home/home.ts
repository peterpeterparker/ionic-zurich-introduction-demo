import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Park, ParkList, ParksProvider} from '../../providers/parks/parks';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  parks: Park[] = new Array();

  constructor(public navCtrl: NavController,
              private parksProvider: ParksProvider) {

  }

  ionViewDidLoad() {
    this.parksProvider.getList().subscribe((list: ParkList) => {
        this.parks = list && list.features && list.features.length > 0 ? list.features : new Array();
      }
    );
  }

  navigate(park: Park) {
    this.navCtrl.push('ParkDetailsPage', {park: park});
  }

}
