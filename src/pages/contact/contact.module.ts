import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TranslateModule} from '@ngx-translate/core';

import {ContactPage} from './contact';

@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    TranslateModule.forChild()
  ]
})
export class ContactPageModule {
}
