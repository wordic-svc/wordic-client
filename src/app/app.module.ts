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

// TranslateLoader 초기화 함수
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HomeModule,
    FooterModule,
    HeaderModule
  ],
  providers: [ provideClientHydration() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
