import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  languageOptions: any[];
  value1: string = 'sr';

  constructor(
    private translate: TranslateService,
    private primeNGConfig: PrimeNGConfig
  )
  {
    translate.setDefaultLang('sr');
    translate.use('sr');


    this.languageOptions = [
      { label: 'Rs', value: 'sr' },
      { label: 'En', value: 'en' },
    ];
  }
  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  onLanguageChange(item: any) {
    this.translate.use(item.value);
  }
}
