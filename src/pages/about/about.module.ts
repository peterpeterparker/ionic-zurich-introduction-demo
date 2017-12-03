import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';

import {AboutPage} from './about';

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    TranslateModule.forChild()
  ]
})
export class AboutPageModule {
}
