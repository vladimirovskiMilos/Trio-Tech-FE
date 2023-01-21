import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor(private translate: TranslateService,  private primeNGConfig: PrimeNGConfig){
    translate.setDefaultLang('en');
    translate.use('en');

  }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

}
