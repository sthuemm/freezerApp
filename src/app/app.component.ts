import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public translate: TranslateService) {
    translate.addLangs(['de','en']);
    translate.setDefaultLang('de');


    let browserLanguage = translate.getBrowserLang();
    console.log(browserLanguage);
    translate.use(browserLanguage.match(/de|en/) ? browserLanguage : 'en');
  }



}
