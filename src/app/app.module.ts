import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './layout/header/header.module';
import { FooterModule } from './layout/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VectorModule } from './components/vector/vector.module';
import { IntroModule } from './pages/intro/intro.module';
import { AlertModalModule } from './components/modal/alert-modal/alert-modal.module';
import { DatePickerModule } from './components/common/date-picker/date-picker.module';

// TranslateLoader 초기화 함수
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, environment.basePath + environment.i18nPath, '.json');
}
import player from 'lottie-web';
import { LottieModule } from 'ngx-lottie';
import { LottiModule } from './components/common/lotti/lotti.module';
import { environment } from '../environments/environment';

// Note we need a separate function as it's required
// by the AOT compiler.
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    VectorModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HomeModule,
    FooterModule,
    HeaderModule,
    IntroModule,
    AlertModalModule,
    DatePickerModule,
    LottiModule
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
