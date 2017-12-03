import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class I18nSwitcherProvider {

  private switch: Subject<string> = new Subject();

  constructor() {
  }

  watch(): Observable<string> {
    return this.switch.asObservable();
  }

  switchLang(lang: string) {
    this.switch.next(lang);
  }

}
