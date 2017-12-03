import {Component, OnDestroy} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TranslateService} from '@ngx-translate/core';
import {I18nSwitcherProvider} from '../providers/i18n-switcher/i18n-switcher';
import {Subscription} from 'rxjs/Subscription';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnDestroy {

  rootPage: any = 'TabsPage';

  private i18nSubscription: Subscription;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private translate: TranslateService,
              private i18nSwitcherProvider: I18nSwitcherProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    translate.setDefaultLang('en');

    let userLang = navigator.language.split('-')[0];
    userLang = /(de|en|fr)/gi.test(userLang) ? userLang : 'en';

    translate.use(userLang);

    this.i18nSubscription = this.i18nSwitcherProvider.watch().subscribe((lang: string) => {
      this.translate.use(lang);
    });
  }

  ngOnDestroy() : void {
    if (this.i18nSubscription != null) {
      this.i18nSubscription.unsubscribe();
    }
  }
}
