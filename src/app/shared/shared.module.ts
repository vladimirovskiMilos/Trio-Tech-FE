import { SelectButtonModule } from 'primeng/selectbutton';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonModule } from "primeng/button";
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
        NavigationComponent,
        FooterComponent,
  ],

  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    ButtonModule,
    SelectButtonModule,
    FormsModule,
    // RippleModule,
    // BrowserAnimationsModule,
    // CommonModule,


    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:HttpLoaderFactory ,
        deps: [HttpClient]
      }
    }),

  ],
   exports: [
    CommonModule,
    RouterModule,
    NavigationComponent,
    FooterComponent,
    HttpClientModule,
    TranslateModule







  ]
})
// @Injectable({
// providedIn:  'root'
// })
export class SharedModule {
//  selectedLanguage: string = 'en';

//   constructor(private translate: TranslateService){
//     translate.setDefaultLang(this.selectedLanguage);
//     translate.use(this.selectedLanguage);
//   }
//   setLang(makeAChoice: string){
//       this.selectedLanguage = makeAChoice;
//   }

 }

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

