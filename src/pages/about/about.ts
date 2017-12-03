import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {I18nSwitcherProvider} from '../../providers/i18n-switcher/i18n-switcher';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
              private i18nSwitcherProvider: I18nSwitcherProvider) {

  }

  switch(lang: string) {
    this.i18nSwitcherProvider.switchLang(lang);
  }

}
